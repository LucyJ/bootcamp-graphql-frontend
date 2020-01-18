import React from 'react'
import { NavContainer, NavButton, NavLink } from './styles'

const NavBar = () => (
  <NavContainer>
    <NavLink to="/"><NavButton>Login</NavButton></NavLink>
    <NavLink to="/SearchBooks"><NavButton>Search Books</NavButton></NavLink>
    <NavLink to="/AddBooks"><NavButton>Add Books</NavButton></NavLink>
  </NavContainer>
)

export default NavBar
