import React from 'react';
import { NavLink } from 'react-router-dom';
// import logoB from '../../images/logoB.png';

export const HeaderNav = () => {
  return (
    <header className='header'>
        {/* <figure className='logo-container'>
          <img className='logo' src={logoB} alt='logo website'/>
        </figure> */}
        <span className='logo_letter'>&lt;H<span className='slash'>/</span>&gt;</span>
        <nav>
            <ul>
                <li>
                    <NavLink className='nav_item' to='/inicio'>Inicio</NavLink>
                    <NavLink className='nav_item' to='/curriculum'>Curriculum</NavLink>
                    <NavLink className='nav_item' to='/contacto'>Contacto</NavLink>
                    <NavLink className='nav_item' to='/portafolio'>Portafolio</NavLink>
                    <NavLink className='nav_item' to='/servicios'>Servicios</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
