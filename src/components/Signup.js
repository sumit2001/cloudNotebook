import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    // const host = "http://localhost:5000";
    const host = "https://cloudnotebookback.herokuapp.com";
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();

    const handleSubmit = (async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        if (password !== cpassword) {
            props.showAlert("Both Passwords are not same", "danger");
        }
        else if (json.success) {
            //save authtoken
            console.log(json);
            localStorage.setItem('token', json.authtoken)
            navigate("/cloudNotebook");
            props.showAlert("Account Created Successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    })
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-3">
            <h2 className="my-3">Sign Up to use Cloud Notebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={onChange} type="text" name="name" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={onChange} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={onChange} type="password" name="password" className="form-control" id="password" required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Password</label>
                    <input onChange={onChange} type="password" name="cpassword" className="form-control" id="cpassword" required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
