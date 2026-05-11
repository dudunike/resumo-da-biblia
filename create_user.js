const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://knufkvvxbwptoxxlnwpg.supabase.co'
const supabaseKey = 'sb_publishable_5H-yd3hlXulNY79T285DQw_dcHrnrAJ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function createUser() {
  console.log('Tentando criar usuário: eduardoeustaquio369@gmail.com')
  const { data, error } = await supabase.auth.signUp({
    email: 'eduardoeustaquio369@gmail.com',
    password: 'mude123',
  })

  if (error) {
    console.error('Erro ao criar usuário:', error.message)
    if (error.message.includes('already registered')) {
        console.log('Usuário já existe no banco!')
    }
  } else {
    console.log('Usuário criado com sucesso (pode precisar de confirmação se o Supabase exigir):', data.user.email)
  }
}

createUser()
