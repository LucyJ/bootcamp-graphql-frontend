import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import ADD_BOOK from './graphql'
import GET_ALL_BOOKS from '../Books/graphql'
import { AddButton } from './styles'

const AddBook = ({ book }) => {
  const [addBooks, { error, loading }] = useMutation(ADD_BOOK, {
    variables: { input: book },
    // refetchQueries: () => [{ query: GET_ALL_BOOKS }],
    update: (client, { data: { addBook } }) => {
      try {
        const data = client.readQuery({ query: GET_ALL_BOOKS })

        // Edit data
        data.books.push(addBook)

        // Write data back to cache
        client.writeQuery({ query: GET_ALL_BOOKS, data })
      } catch (err) {
        // nothing
      }
    },
  })

  return (
    <>
      {loading ? 'Loading' : <AddButton type="button" onClick={addBooks}>Add Book</AddButton>}
      {error && 'Error!'}
    </>
  )
}

export default AddBook
