import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import SEARCH_BOOKS_BY_TITLE from './graphql'
import { BookContainer, BookTitle } from './styles'

const SearchBooks = ({ search }) => {
  const [getBookSearch, {
    loading, error, data, called,
  }] = useLazyQuery(SEARCH_BOOKS_BY_TITLE, {
    variables: { input: search || '' },
    partialRefetch: true,
  })

  if (loading) return (<BookContainer><BookTitle>Loading...</BookTitle></BookContainer>)
  if (error) return <p>Error</p>
  if (!called) return setTimeout(getBookSearch, 1)

  return (
    data.searchBooks.map((book => (
      <BookContainer key={book.id}>
        <BookTitle>{book.title}</BookTitle>
      </BookContainer>
    )))
  )
}


export default SearchBooks
