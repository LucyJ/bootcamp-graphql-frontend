import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import SearchBooks from './containers/SearchBooks'
import NavBar from './containers/NavBar'
import Login from './containers/Login'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/SearchBooks" component={SearchBooks} />
            <Route path="/AddBook" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
