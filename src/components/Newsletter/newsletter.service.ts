import axios from 'axios'

type SubscribeProps = {
  name: string
  email: string
}

export const subscribe = async ({ email, name }: SubscribeProps) => {
  const response = await axios.post('/api/newsletter', {
    email,
    name
  })

  return response
}
