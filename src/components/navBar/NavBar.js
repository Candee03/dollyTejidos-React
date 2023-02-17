import './NavBar.scss'
import React from "react";
import Logo from '../logo/Logo';
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
    const nav = ['Home', 'Categorias', 'Sobre Nosotros'];
    const links = nav.map((link, i) => <li key={i} className="li-navbar"><a className="link-navbar" href='#'>{link}</a></li>)
    return (
        <header className='header'>
            <Logo />
            <div>
                <ul className='ul-links'>
                    { links }
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;