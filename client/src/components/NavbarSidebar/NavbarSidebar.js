import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Navbar/Sidebar/Sidebar';

const NavbarSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    );
};


export default NavbarSidebar;