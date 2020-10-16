import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [adminEmail, setAdminEmail] = useState(null);

    const handleSubmit = (e) => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/registerAsAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: adminEmail })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault()
        e.target.reset();
    }

    const handleBlur = (e) => {
        const admin = e.target.value;
        setAdminEmail(admin)
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="pt-3 pb-3">
                    <h4>Make as admin</h4>
                </div>
                <div className="addService-container p-5">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;