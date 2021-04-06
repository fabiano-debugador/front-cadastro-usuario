import React from "react";
import { useForm } from "react-hook-form";
import '../css/style.css';
import { Switch, Route } from 'react-router-dom'

export default function () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const method = "POST";
        const field = {
                        "name": data.name, 
                        "email": data.email, 
                        "password": data.password,
                        "image": data.image
                    } 

        let body = JSON.stringify(field);
        fetch(`http://localhost:8000/api/user`,{method, body, headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          }})
        .then((response) => response.json())
        .then(resp => window.location.href = "/")
        .catch((err) => console.log(err))
    }

    return (
        <Switch>
            <Route path="/register">
                <div className="content">
                    <div className="quadro">
                        <div id="registration-form">
                            <p >Registration Form</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Name</label>
                            <input name="name" placeholder="Name" ref={register} />
                            <label>Email</label>
                            <input name="email" placeholder="Email" ref={register} />
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" ref={register} />
                            <label>Photo</label>
                            <input name="image" id="image" type="file" ref={register} />
                            <input type="submit" className="btnForm" value="Send" />
                        </form>
                    </div>
                </div>
            </Route>
        </Switch>
    );
}