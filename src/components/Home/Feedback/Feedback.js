import React from 'react';
import './Feedback.css';

const Feedback = ({ review }) => {
    return (
        <div className="col-md-4 p-3">
            <div className="feedback-container p-3">
                <div className="d-flex">
                    <img className="rounded-circle" style={{ height: '65px' }} src={review.img} alt="review"></img>
                    <div className="ml-3 mt-1">
                        <h5>{review.name}</h5>
                        <h6>{review.designation}</h6>
                    </div>
                </div>
                <p className="mt-3 text-secondary">{review.description}</p>
            </div>
        </div>
    );
};

export default Feedback;