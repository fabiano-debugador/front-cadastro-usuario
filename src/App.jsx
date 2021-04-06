import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import './css/style.css';
import Form from './Components/form';
import Login from './Components/login';
import Header from './Components/header';
import Users from './Components/users';
export default function App(props) {
    return ( 
        <Router>
            <Fragment>
                <Header />
                <Login />
                <Form />
                <Users />
            </Fragment>
        </Router>
    );
}