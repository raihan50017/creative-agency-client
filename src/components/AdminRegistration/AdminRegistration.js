import React from 'react';
import { useState } from 'react';
import logo from '../../images/logos/logo.png';

const AdminRegistration = () => {

    const [registerInfo, setRegisterInfo] = useState({});

    const handleSubmit = (e) => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/registerAsAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault();
        e.target.reset();
    }

    const handleBlur = (e) => {
        const newInfo = { ...registerInfo };
        newInfo[e.target.name] = e.target.value;
        setRegisterInfo(newInfo);
    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <img style={{ height: '50px' }} src={logo} alt="Logo"></img>
            </div>
            <div className="d-flex justify-content-center">
                <div className="login-form d-flex justify-content-center">
                    <div>
                        <h4 className="text-center mb-4">Register your email as admin</h4>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input onBlur={handleBlur} placeholder="Enter your name" name="name" type="text" class="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} placeholder="Enter your email" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Register now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminRegistration;