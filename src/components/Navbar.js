import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/cloudNotebook/login");
    }

    let location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/cloudNotebook">Cloud Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/cloudNotebook" ? "active" : ""}`} aria-current="page" to="/cloudNotebook">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/cloudNotebook/about" ? "active" : ""}`} to="/cloudNotebook/about">About</Link>
                            </li>
                        </ul>

                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-primary mx-2" role="submit" to="/cloudNotebook/login">Login</Link>
                            <Link className="btn btn-primary mx-2" role="submit" to="/cloudNotebook/signup">Signup</Link>
                        </form> : <button onClick={handleLogout} className="btn btn-primary">Log Out</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
