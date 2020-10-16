import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import './AddService.css';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://hidden-hamlet-47456.herokuapp.com/addService', {
            method: 'POST',
            body: formData
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
                    <h4>Add services</h4>
                </div>
                <div className="addService-container p-5">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service title</label>
                            <input name="title" onBlur={handleBlur} placeholder="Service title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <textarea style={{ height: '100px' }} name="description" onBlur={handleBlur} placeholder="Write description" type="text" class="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="form-Group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01"> <FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload icon</span></span>
                                </div>
                                <div class="custom-file">
                                    <input onChange={handleFileChange} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" required />
                                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;