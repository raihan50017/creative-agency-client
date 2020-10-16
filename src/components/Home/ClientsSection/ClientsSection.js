import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import ClientCompany from '../ClientCompany/ClientCompany';

const clients = [
    {
        id: 1,
        img: google
    },
    {
        id: 2,
        img: airbnb
    },
    {
        id: 3,
        img: netflix
    },
    {
        id: 4,
        img: uber
    }
]

const ClientsSection = () => {
    return (
        <div className="row mt-5 mb-5 pt-5 pb-5">
            {
                clients.map(client => <ClientCompany key={client.id} client={client}></ClientCompany>)
            }
        </div>
    );
};

export default ClientsSection;