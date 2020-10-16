import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel3 from '../../../images/carousel3.png';
import carousel4 from '../../../images/carousel4.png';
import carousel5 from '../../../images/carousel5.png';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const WorkCarousel = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div><img style={{height:'300px'}} src={carousel1} alt="carousel-1"></img></div>
            <div><img style={{height:'300px'}} src={carousel2}  alt="carousel-2"></img></div>
            <div><img style={{height:'300px'}} src={carousel3}  alt="carousel-3"></img></div>
            <div><img style={{height:'300px'}} src={carousel4}  alt="carousel-4"></img></div>
            <div><img style={{height:'300px'}} src={carousel5}  alt="carousel-5"></img></div>
        </Carousel>
    );
};

export default WorkCarousel;