import React from "react";
import '../css/header.css';
import { Link } from 'react-router-dom'

export default function header() {
    return (
<header>
      <h1 className="float-l">
        <Link to="" title="Titulo do Site">Marry Perry</Link>
      </h1>
      
      <input type="checkbox" id="control-nav" />
      <label htmlFor="control-nav" className="control-nav"></label>
      <label htmlFor="control-nav" className="control-nav-close"></label>

      <nav className="float-r">
        <ul className="list-auto">
          <li>
            <Link to="/" title="home">Home</Link>
          </li>
          <li>
            <Link to="" title="logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
    );
}