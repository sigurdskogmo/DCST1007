import * as React from "react"
import { Component } from "react-simplified"
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/" activeStyle={{ color: '#8b1529' }}>StudAdm</NavLink>
        {' ' /* Add extra space between menu items */}
        <NavLink to="/students" activeStyle={{ color: '#8b1529' }}>Studenter</NavLink>
        {' '}
        <NavLink to="/programs" activeStyle={{ color: '#8b1529' }}>Studieprogram</NavLink>
      </div>
    ) 
  }
}

export default Menu