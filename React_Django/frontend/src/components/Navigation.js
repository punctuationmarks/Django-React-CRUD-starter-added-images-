import React from "react";
import "../App.css";

// allowing the navlinks to be hyper tagged
import { Link } from "react-router-dom";

function Navigation() {


    // 'easiest' way to style the links is to make a funciton 
    // here instead of importing from ./css (not entirely sure why)
    const navLinkStyle = {
        color: 'white',
        fontSize: 25,
        textDecoration: "none"
    };


    return (
    <nav>
      <h3>Logo</h3>
      <ul className="navLinks">
        <Link style={navLinkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navLinkStyle} to="/blog">
          <li>Blog</li>
        </Link>
        <Link style={navLinkStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navLinkStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
