import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import OrderedService from '../OrderedService/OrderedService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    
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
        isAdmin ? <AdminServiceList></AdminServiceList> : <OrderedService></OrderedService>
    );  
};

export default Dashboard;