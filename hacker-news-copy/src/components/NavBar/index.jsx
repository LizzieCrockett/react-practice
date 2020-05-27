import React from 'react';
import NavItem from '../NavItem';

const NavBar = () => {
    return (
        <span className='nav-bar'>
            <NavItem>new</NavItem> |
            <NavItem>threads</NavItem> |
            <NavItem>comments</NavItem> |
            <NavItem>show</NavItem> |
            <NavItem>ask</NavItem> |
            <NavItem>jobs</NavItem> |
            <NavItem>submit</NavItem>
        </span>
    )
}

export default NavBar;