import React from "react";
import '../dasNav/dashNav.css';
import DashLogo from './img/logo.svg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function dashNav () {
    return (
        <nav className="dash-nav">
            <div className="orgInfo">
                <img src={DashLogo}></img>
                <h4>FTRM</h4>
                <h5>Federatia de Triathlon din RM</h5>
            </div>
            <ul className="dashUl">
                <li><Link to="/dashboard">Обзор</Link></li>
                <li><a href="">Мероприятия</a></li>
                <li><Link to="/dashboard/participants">Спортсмены</Link></li>
                <li><a href="">Результаты</a></li>
                <li><a href="">Хронометраж</a></li>
            </ul>
        </nav>
    )}

export default dashNav;