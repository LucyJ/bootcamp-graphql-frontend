import gql from 'graphql-tag'

const ADD_BOOK = gql`
    mutation addBook($input: addBookInput!) {
        addBook(input: $input) {
            title
        }
    }
`

export default ADD_BOOK
