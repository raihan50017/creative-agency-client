import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ClientsSection from '../ClientsSection/ClientsSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Worksection from '../WorkSection/Worksection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientsSection></ClientsSection>
            <Services></Services>
            <Worksection></Worksection>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;