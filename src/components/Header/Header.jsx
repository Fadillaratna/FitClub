import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';

export const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const { menuOpened, setMenuOpened } = useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="" className='logo' />

            {(menuOpened === false && mobile === true) ?

                (<div style={
                    {
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5',
                        borderRadius: "5px"
                    }}

                    onClick={() => setMenuOpened(true)}>
                    <FaBars className="bar" size={50} /></div>)
                :
                (
                
                    <ul className='header-menu'>
                    <li>
                        <Link 
                        onClick={() => setMenuOpened(false)}
                        to='home'
                        spy={true}
                        smooth={true}
                        >
                        Home
                    </Link></li>
                    <li onClick={() => setMenuOpened(false)}>Programs</li>
                    <li onClick={() => setMenuOpened(false)}>Why us</li>
                    <li onClick={() => setMenuOpened(false)}>Plans</li>
                    <li onClick={() => setMenuOpened(false)}>
                    <Link 
                        
                        to='testimonials'
                        span={true}
                        smooth={true}
                        onClick={() => setMenuOpened(false)}
                        >
                        Testimonials</Link>
                    </li>
                </ul>)}

            {/* {(menuOpened === true && mobile === false) ?
                (
                    <ul className='header-menu'>
                        <li onClick={() => setMenuOpened(false)}>Home</li>
                        <li onClick={() => setMenuOpened(false)}>Programs</li>
                        <li onClick={() => setMenuOpened(false)}>Why us</li>
                        <li onClick={() => setMenuOpened(false)}>Plans</li>
                        <li onClick={() => setMenuOpened(false)}>Testimonials</li>
                    </ul>
                ) :

                <div style={
                    {
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5',
                        borderRadius: "5px"
                    }}

                    onClick={() => setMenuOpened(true)}
                >
                    <FaBars className="bar" size={50} /></div>
            } */}



        </div>
    )
}
