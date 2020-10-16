import React from 'react';
import Frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2>Let’s Grow Your<br></br> Brand To The<br></br> Next Level</h2>
                <p className="mt-5 mb-5" style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button style={{backgroundColor:'#111430'}} className="btn text-white">Hire US</button>
            </div>
            <div className="col-md-6">
                <img src={Frame} className="img-fluid" alt="Frame"></img>
            </div>
        </div>
    );
};

export default HeaderMain;