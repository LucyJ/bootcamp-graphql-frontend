import gql from 'graphql-tag'

const CHECK_AUTH = gql`
    query checkAuth {
        checkAuth
    }
`

export default CHECK_AUTH
