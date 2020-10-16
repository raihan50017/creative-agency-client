import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrder from '../SingleOrder/SingleOrder';
import './OrderedService.css';

const OrderedService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {email} = loggedInUser;
    const[orderedItem, setOrderedItem] = useState([]);

    useEffect(() => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/findOrderByEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
            .then(res => res.json())
            .then(data => setOrderedItem(data) )
    }, [])

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="pt-3 pb-3">
                    <h4>Service list</h4>
                </div>
                <div className="ordered-container">
                    <div className="row p-5">
                        {
                            orderedItem.map(ordered => <SingleOrder ordered={ordered} key={ordered._id}></SingleOrder>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderedService;