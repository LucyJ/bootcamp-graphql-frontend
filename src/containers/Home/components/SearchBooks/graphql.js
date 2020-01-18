import gql from 'graphql-tag'

const SEARCH_BOOKS_BY_TITLE = gql`
    query searchBooks($input: String!) {
        searchBooks(input: $input) {
            id
            title
        }
    }
`

export default SEARCH_BOOKS_BY_TITLE
