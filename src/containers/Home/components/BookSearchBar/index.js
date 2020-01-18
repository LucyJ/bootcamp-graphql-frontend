import React, { useState } from 'react'
import SearchBooks2 from '../SearchBooks2'
import { NiceInput, Container } from './styles'

const BookSearchBar = () => {
  const [bookString, setBookString] = useState()

  return (
    <Container>
      <NiceInput placeholder="Search Books" value={bookString} onChange={event => setBookString(event.target.value)} />
      <SearchBooks2 search={bookString} />
    </Container>
  )
}

export default BookSearchBar
