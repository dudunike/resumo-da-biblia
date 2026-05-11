import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const payload = req.body
  console.log('Webhook received:', JSON.stringify(payload, null, 2))

  // Determine the event and email from ggCheckout payload
  // Based on common patterns: event might be 'payment.approved' or 'refunded'
  // and email might be in payload.data.customer.email or similar
  
  const event = payload.event || payload.status
  const email = payload.email || (payload.data && payload.data.email) || (payload.customer && payload.customer.email)

  if (!email) {
    return res.status(400).json({ error: 'No email found in payload' })
  }

  try {
    if (event === 'Pagamento aprovado' || event === 'approved' || event === 'paid') {
      // Create user with default password 'mudi123'
      const { data, error } = await supabase.auth.admin.createUser({
        email: email,
        password: 'mude123',
        email_confirm: true
      })

      if (error && error.message.includes('already registered')) {
        console.log('User already exists, access maintained.')
        return res.status(200).json({ message: 'User already exists' })
      }

      if (error) throw error
      console.log('User created successfully:', email)
      return res.status(200).json({ message: 'Access granted' })

    } else if (event === 'Reembolso' || event === 'refunded' || event === 'chargeback') {
      // Find user and delete or deactivate
      const { data: users, error: findError } = await supabase.auth.admin.listUsers()
      if (findError) throw findError

      const user = users.users.find(u => u.email === email)
      if (user) {
        const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id)
        if (deleteError) throw deleteError
        console.log('User access revoked:', email)
        return res.status(200).json({ message: 'Access revoked' })
      }

      return res.status(200).json({ message: 'User not found' })
    }

    return res.status(200).json({ message: 'Event ignored', event })
  } catch (error) {
    console.error('Webhook Error:', error.message)
    return res.status(500).json({ error: error.message })
  }
}
