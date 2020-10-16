import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faCalendar, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { useContext } from 'react';
import { userContext } from '../../../App';
import { useEffect } from 'react';
import { useState } from 'react';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/checkAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column col-md-2 py-3 px-4" style={{ height: "100vh" }}>
            <div className="mb-4">
                <img style={{ height: '50px' }} src={logo} alt="LOGO"></img>
            </div>
            <ul className="list-unstyled mx-3">
                {
                    isAdmin ? <>
                        <li>
                            <Link className="text-decoration-none" to="/dashboard">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-decoration-none">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-decoration-none" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminServiceList" className="text-decoration-none">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Service list</span>
                            </Link>
                        </li>
                    </> : <>
                            <li>
                                <Link className="text-decoration-none" to="/dashboard">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none" to={`order/${1234}`}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <div>
                                <li>
                                    <Link to="/orderedService" className="text-decoration-none">
                                        <FontAwesomeIcon icon={faCalendar} /> <span>Service list</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addReview" className="text-decoration-none">
                                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                                    </Link>
                                </li>
                            </div>
                        </>
                }
            </ul>
        </div>

    );
};

export default Sidebar;