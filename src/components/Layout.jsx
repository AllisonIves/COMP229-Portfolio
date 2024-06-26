//Layout.jsx Allison Ives 301283511 05/31/2024
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>        
        <img src="src\photos\logo.png" width="300"></img>
        <h1>My Portfolio</h1>
        <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link>| <Link to="/project">Projects</Link>| <Link to="/contact">Contact</Link>
        </nav>
            <br/>
        <hr />
        </>
    );
}