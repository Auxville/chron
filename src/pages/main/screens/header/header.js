import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Logo from './Header_logo.svg'
import './header.css'


function Header () {
    return (
    <header className="header">
        <div className="header-logo">
            <a href="/"><img src={Logo}></img></a>
        </div>
        <nav className="header-nav">
            <ul>
                <li><Link to="/about">О проекте</Link></li>
                <li><a href="">Преимущества</a></li>
                <li><a href="">Цены</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </nav>
        <div className="header-button"><Link to="/dashboard"><button>Подать заявку</button></Link></div>
    </header>
    )}

export default Header;