import React, { useReducer } from 'react'
import { NiceInput, BookBar } from './styles'
import AddBook from '../AddBook'
import Books from '../Books'
// import { useMutation } from '@apollo/react-hooks'
// import ADD_BOOK from './graphql'
// import GET_ALL_BOOKS from '../Books/graphql'

const AddBookBar = () => {
  const initialState = {
    title: '',
    language: 'en',
    numPages: 100,
    datePublished: '2010-12-15',
    bestseller: true,
    authorId: '1356fa62-d9a5-484c-ba0e-c6a9ed898fe5',
    publisherId: '14848152-26a5-435d-8ff6-5a2212741ffe',
  }

  const reducer = (state, { field, value }) => ({
    ...state,
    [field]: value,
  })

  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const {
    title, language, numPages, datePublished, bestseller,
  } = state

  return (
    <>
      <BookBar>
        <NiceInput name="title" placeholder="title" value={title} onChange={onChange} />
        <NiceInput name="language" placeholder="en" value={language} onChange={onChange} />
        <NiceInput name="numPages" placeholder="number" value={numPages} onChange={onChange} />
        <NiceInput name="datePublished" placeholder="yyyy-mm-dd" value={datePublished} onChange={onChange} />
        <NiceInput name="bestseller" placeholder="true or false" value={bestseller} onChange={onChange} />
        <AddBook book={state} />
      </BookBar>
      <Books />
    </>
  )
}

export default AddBookBar
