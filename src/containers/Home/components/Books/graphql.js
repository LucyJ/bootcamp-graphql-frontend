import gql from 'graphql-tag'

const GET_ALL_BOOKS = gql`
    query getAllBooks {
    books {
        id
        title
        #author {
        #firstName
        # }
        # publisher {
        #   company
        #}
    }
}
`

export default GET_ALL_BOOKS
