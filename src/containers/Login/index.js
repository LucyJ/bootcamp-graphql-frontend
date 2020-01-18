import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import LOGIN from './graphql'
import CheckAuth from './checkAuth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => localStorage.setItem('token', token),
  })

  return (
    <div>
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={login}>Login!</button>
      <CheckAuth />
    </div>
  )
}


export default Login
