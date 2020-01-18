import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
    display: flex;
    background-color: grey;
    height: 40px;
    justify-content: center;
`

export const NavButton = styled.button`
    border: none;
    flex: 1;
    background-color: grey;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    height: 100%;
    text-align: center;
`
export const NavLink = styled(Link)`
    display: flex;
    flex:1;
    justify-content: center;
    text-decoration: none;

`
