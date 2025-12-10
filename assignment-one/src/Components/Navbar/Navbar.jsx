import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

import logo from '../../assets/react.svg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-custom fixed-top shadow-lg">
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                    <span className="brand-icon me-2">
                        <img src={logo} alt="" />
                    </span>
                    <span className="brand-text">Start React Js </span>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active px-3" to="/">
                                <span className="nav-link-text">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/portfolio">
                                <span className="nav-link-text">Portfolio</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/contact">
                                <span className="nav-link-text">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}