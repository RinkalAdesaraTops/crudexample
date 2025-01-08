import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/home'>Home</Link> ||
            {/* <a href='/home'>Home</a> || */}
            <a href='/contact'> Contact</a>
            <ul>
                <li><a href='/contact/c1'>Contact1</a></li>
                <li><a href='/contact/c2'>Contact2</a></li>
            </ul> ||
            <a href='/crud'> CRUD Example</a> 
        </li>
      </ul>
    </div>
  )
}

export default Menu
