import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import SEARCH_BOOKS_BY_TITLE from './graphql'

const SearchBooks = () => {
  const [bookString, setBookString] = useState()

  const [getBookSearch, {
    loading, error, data, called,
  }] = useLazyQuery(SEARCH_BOOKS_BY_TITLE, {
    variables: { input: bookString },
    partialRefetch: true,
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  if (!called) {
    return (
      <div>
        <input placeholder="Search Books" value={bookString} onChange={event => setBookString(event.target.value)} />
        <button
          type="button"
          onClick={getBookSearch}
        >
Search!

        </button>
      </div>
    )
  }

  return (
    <div>
      <SearchBooks>
      {data.searchBooks.map((book => (<p key={book.id}>{book.title}</p>)))}
    </div>
  )
}


export default SearchBooks
