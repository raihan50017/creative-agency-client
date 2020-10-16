import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { userContext } from '../../../App';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Order = () => {

    const { serviceId } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orderInfo, setOrderInfo] = useState({});

    useEffect(() => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/findServiceById', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({serviceId})
        })
        .then(res => res.json())
        .then(data => {
            const newInfo = {...orderInfo};
            newInfo.type = "pending";
            newInfo.name = loggedInUser.name;
            newInfo.email = loggedInUser.email;
            newInfo.img = loggedInUser.img;
            newInfo.projectName = data[0].title;
            newInfo.projectDescription = data[0].description;
            newInfo.projectImage = data[0].image;
            newInfo.projectId = data[0]._id;
            setOrderInfo(newInfo);
        })
    }, [])

    const handleSubmit = (e) => {

        fetch('https://hidden-hamlet-47456.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        e.preventDefault()
        e.target.reset();
    }

    const handleBlur = (e) => {
        const newOrderInfo = {...orderInfo};
        newOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(newOrderInfo);
    }


    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="pt-3 pb-3">
                    <h4>Order</h4>
                </div>
                <div className="addService-container p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input name="name" onBlur={handleBlur} placeholder={loggedInUser.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input name="email" onBlur={handleBlur} placeholder={loggedInUser.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <input name="projectName" onBlur={handleBlur} placeholder={orderInfo.projectName} type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <textarea style={{ height: '100px' }} name="projectDescription" onBlur={handleBlur} placeholder={orderInfo.projectDescription} type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <input name="price" onBlur={handleBlur} placeholder="Price" type="text" class="form-control" id="exampleInputPassword1" required />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01"> <FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload image</span></span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                        <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Order now</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Order;