import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import CHECK_AUTH from './graphql'

const CheckAuth = () => {
  const [checkAuth, data, called] = useLazyQuery(CHECK_AUTH,
    { onCompleted: () => console.log(data) })

  if (!called) {
    return (
      <button type="button" onClick={checkAuth}>
    checkAuth
      </button>
    )
  }
  return (<p>{data.checkAuth}</p>)
}

export default CheckAuth
