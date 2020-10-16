import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './Addreview.css';

const AddReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [reviewInfo, setReviewInfo] = useState({ ...loggedInUser });
    const handleBlur = e => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://hidden-hamlet-47456.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        e.target.reset();
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="pt-3 pb-3">
                    <h4>Review</h4>
                </div>
                <div className="addService-container p-5">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input name="name" onBlur={handleBlur} placeholder={loggedInUser.name} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <input name="designation" onBlur={handleBlur} placeholder="Company's name, designation" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div class="form-group">
                            <textarea style={{ height: '100px' }} name="description" onBlur={handleBlur} placeholder="Write description" type="text" class="form-control" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddReview;