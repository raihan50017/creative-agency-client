import React, { useEffect, useState } from 'react';
import Service from "../../Home/Service/Service";

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://hidden-hamlet-47456.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div className="mt-5 pt-5 text-center">
                <h2>Provide awosome <span className="text-primary">services</span></h2>
            </div>
            <div className="row mx-3 mt-5 mb-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)

                }
            </div>
        </section>
    );
};

export default Services;