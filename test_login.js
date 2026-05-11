const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://knufkvvxbwptoxxlnwpg.supabase.co'
const supabaseKey = 'sb_publishable_5H-yd3hlXulNY79T285DQw_dcHrnrAJ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function testLogin() {
  console.log('Testando login para: eduardoeustaquio369@gmail.com')
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'eduardoeustaquio369@gmail.com',
    password: 'mude123',
  })

  if (error) {
    console.error('Erro no login:', error.message)
  } else {
    console.log('Login realizado com sucesso! O acesso está liberado.')
  }
}

testLogin()
