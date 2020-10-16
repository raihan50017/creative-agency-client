import React from 'react';
import './SingleOrder.css';

const SingleOrder = ({ordered}) => {
    return (
        <div className="col-md-4">
            <div className="order-container">
                <div className="d-flex justify-content-between">
                    <img className="rounded-circle" style={{height:'50px'}} src={`data:image/png;base64,${ordered.projectImage.img}`} alt="ORDERED"></img>
                    <p>{ordered.type}</p>
                </div>
                <div>
                    <h5 className="mt-2 mb-2">{ordered.projectName}</h5>
                    <p>{ordered.projectDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;