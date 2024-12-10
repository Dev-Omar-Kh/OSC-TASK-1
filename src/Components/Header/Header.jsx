import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/Images/logo-resize.png';

import headerCSS from './header.module.css';
import './active.css';

export default function Header() {

    // ====== nav-for-phone ====== //

    useEffect(() => {

        const navPh = document.getElementById('nav_ph');
        const navBar = document.getElementById('navBar');

        const toggleNav = () => {

            navPh.classList.toggle(headerCSS.change);
            navBar.classList.toggle(headerCSS.display_nav);

        }

        navPh.addEventListener('click' , toggleNav);
        navBar.addEventListener('click' , toggleNav);

        return () => {

            navPh.removeEventListener('click' , toggleNav);
            navBar.removeEventListener('click' , toggleNav);

        }

    } , []);

    useEffect(() => {

        const header = document.getElementById('header');

        const handleOnScroll = () => {

            const scrollY = window.scrollY;

            if(scrollY > 0){

                header.style.backgroundColor = 'var(--light-color)'

            }
            else{

                header.style.backgroundColor = 'transparent'

            }

        }

        window.addEventListener('scroll' , handleOnScroll);

        return () => {
            window.removeEventListener('scroll' , handleOnScroll);

        }

    } , [])

    return <React.Fragment>

        <header id='header' className={`${headerCSS.container}`}>

            <Link className={headerCSS.logo}>
                <img src={logo} alt="logo" />
            </Link>

            <div id='nav_ph' className={headerCSS.nav_ph}>

                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>

            </div>

            <nav id='navBar' className={headerCSS.nav}>

                <ul>

                    <li><NavLink className='nav_link' to={'/'}>Home</NavLink></li>
                    <li><NavLink className='nav_link' to={'/services'}>Services</NavLink></li>
                    <li><NavLink className='nav_link' to={'/aboutUs'}>About Us</NavLink></li>
                    <li><NavLink className='nav_link' to={'/helpCenter'}>Help Center</NavLink></li>

                </ul>

                <Link className={headerCSS.action}>Login</Link>

            </nav>

        </header>

    </React.Fragment>

}