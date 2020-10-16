import React from 'react';
import WorkCarousel from '../WorkCarousel/WorkCarousel';
import './WorkSection.css';
const Worksection = () => {
    return (
        <section className="work-container text-center pt-5 pb-5">
            <h2 className="text-white mb-5">Here are some of <span className="text-primary">our works</span></h2> 
            <WorkCarousel></WorkCarousel>        
        </section>
    );
};

export default Worksection;