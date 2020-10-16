import React from 'react';

const ClientCompany = ({client}) => {
    return (
        <div className="col-md-3 col-sm-6 d-flex justify-content-center">
            <img style={{height:'50px'}} src={client.img} alt="CLIENT"></img>
        </div>
    );
};

export default ClientCompany;