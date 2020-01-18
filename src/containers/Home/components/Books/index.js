import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_ALL_BOOKS from './graphql'
import { BookItem, BookList, BookTitle } from './styles'

const Books = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS)

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <BookList>
      {data.books.map((book => (
        <BookItem key={book.id}>
          <BookTitle>{book.title}</BookTitle>
        </BookItem>
      )))}
    </BookList>
  )
}


export default Books
