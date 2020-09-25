import React from 'react';
import {NavLink} from 'react-router-dom';


function Header (){
    return (
        <div className='head-div'>
            <NavLink className='head-nav' to='/'>Home</NavLink>
            <NavLink className='head-nav' to='/game'>Play Game Of Life</NavLink>
            <NavLink className='head-nav' to='/about'>About</NavLink>
        </div>
    )
}
export default Header;