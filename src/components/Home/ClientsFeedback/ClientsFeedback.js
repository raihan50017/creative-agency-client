import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feedback from '../Feedback/Feedback';

const ClientsFeedback = () => {

    const[clientsReview, setClientsReview] = useState([]);

    useEffect(() =>{
        fetch('https://hidden-hamlet-47456.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setClientsReview(data))
    },[])

    return (
      <section>
          <h2 className="text-center mt-5 pt-5">Clients <span className="text-primary">feedback</span></h2>
           <div className="container mt-5 mb-5 pt-5">
            <div className="row">
            {
                clientsReview.map(review => <Feedback key={review._id} review={review}></Feedback>)
            }
        </div>
       </div>
      </section>
    );
};

export default ClientsFeedback;