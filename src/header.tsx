import React, { useState } from 'react'
import './header.css'
import { Link } from "react-router-dom";


const Header: React.FC = () => {

    const [menuvar, setMenuvar] = useState<boolean>(false);
    const openmenu = () => {
        setMenuvar(!menuvar);
    }

  return (
    <header>
        <button className='menubutton' onClick={openmenu}>MENU</button>
        {menuvar &&
        <ul className='slide-in-blurred-top'>
            <li className="element"><Link to="/home" >home</Link></li>
            <li className="element"><Link to="/photo_library">photo</Link></li>
            <li className="element"><Link to="/calculate">game</Link></li>
        </ul>}
    </header>
  )
}

export default Header;