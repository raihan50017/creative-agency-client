import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AdminServiceList.css';

const AdminServiceList = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="pt-3 pb-3">
                    <h4>Service list</h4>
                </div>
                <div className="adminService-container p-5">
                    <table class="table">
                        <thead>

                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.map(order =>
                                    <tr>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.projectName}</td>
                                        <td>{order.projectDescription}</td>
                                        <td>{order.type}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;