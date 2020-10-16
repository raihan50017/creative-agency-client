import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    return (
        <div className="col-md-4 p-3">
            <Link className="text-decoration-none" to={`/order/${service._id}`}>
                <div className="px-5 py-5 hover-effect">
                    <div className="text-center">
                        {
                            service.image && <img style={{ height: '74px' }} src={`data:image/png;base64,${service.image.img}`} alt="SERVICE"></img>
                        }
                        <h4 className="mt-3 mb-3">{service.title}</h4>
                        <p className="text-secondary">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;