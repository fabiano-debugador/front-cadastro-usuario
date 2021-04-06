import React from "react";
import { useForm } from "react-hook-form";
import '../css/style.css';
import { Switch, Route } from 'react-router-dom';

export default function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const method = "POST";
        const field = {
                        "email": data.email, 
                        "password": data.password,
                    } 

        let body = JSON.stringify(field);
        fetch(`http://localhost:8000/api/auth/login`,{method, body, headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          }})
        .then((response) => response.json())
        .then(resp => console.log(resp))
        .catch(() => console.log("error"))
    }

    return (
        <Switch>
            <Route path="/login">
                <div className="content">
                    <div className="quadro">
                        <div id="registration-form">
                            <p >Login</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Email</label>
                            <input name="email" placeholder="Email" ref={register} />
                            <label>Password</label>
                            <input name="password" placeholder="Password" ref={register} />
                            <input type="submit" className="btnForm" value="Sign In" />
                        </form>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}