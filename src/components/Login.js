import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    // const host = "http://localhost:5000";
    const host = "https://cloudnotebookback.herokuapp.com";
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit = (async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            //save authtoken
            localStorage.setItem('token', json.authtoken)

            navigate("/cloudNotebook");
            props.showAlert("Logged in Successfully", "success");
        } else {

            props.showAlert("Invalid Credentials", "danger");
        }
    })
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-3">
            <h2 className="my-3">Login to use Cloud Notebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={onChange} value={credentials.email} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={onChange} value={credentials.password} type="password" className="form-control" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
