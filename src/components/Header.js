import React from 'react'
import './Header.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

export const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#ff5555" }}>
            
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"/>
                        
                </a>
            
            <a className="navbar-brand" href="#">Bookify</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ViewBook">View Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/AddBook'>Add Books</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}
