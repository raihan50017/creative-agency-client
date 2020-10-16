import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link class="navbar-brand" to='/'><img style={{ height: '47px' }} src={logo} alt="LOGO"></img></Link>
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link mr-5" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-5" to='/'>Our Protfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-5" to='/'>Our Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-5" to='/'>Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ backgroundColor: '#111430' }} class="nav-link mr-5 btn text-white" to='/login'>Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ backgroundColor: '#111430' }} class="nav-link mr-5 btn text-white" to='/adminLogin'>Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;