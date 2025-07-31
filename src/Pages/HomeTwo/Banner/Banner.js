import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import shape4 from "../../../assets/images/shapes/shape-06.png";
import two from "../../../assets/images/banner/banner-two.jpg";
import { Link } from 'react-router-dom';
import '../Banner/Banner.css'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
const Banner = () => {
    const carouselRef = useRef(null);

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };
    return (

        <section className="banner__two slider-two p_relative">
            <div className="pattern-layer">
                <div className=" pattern-1 p_absolute" data-parallax='{"x": 100}' style={{ backgroundImage: `url(${shape4})` }}></div>
            </div>
            <div className="image-layer p_absolute" style={{ backgroundImage: `url(${two})` }}></div>
            <div className="banner__data__two p_relative">
                <div className="carousel-nav">
                    <button className="carousel-btn prev-btn" onClick={goToPrev} ><FaChevronCircleLeft className='iconLeft' style={{}} /></button>
                    <button className="carousel-btn next-btn" onClick={goToNext}><FaChevronCircleRight className='iconLeft'/></button>
                </div>
                <OwlCarousel
                    className=""
                    items={1}
                    loop={true}
                    margin={0}
                    smartSpeed={1000}
                    ref={carouselRef}
                    autoplaySpeed={2000}
                    autoPlay={true}
                    autoplay={2000}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 1,
                        },
                        768: {
                            items: 1,
                        },
                        992: {
                            items: 1,
                        },
                        1200: {
                            items: 1,
                        },
                    }}
                >
                    <div className="slide-item p_relative">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-box p_relative">
                                        <div className="sub__title">
                                            <h4 className="p_relative"> <span className=" two">Better Future</span></h4>
                                        </div>
                                        <h2 className="p_relative"><span className="bannerHeadding"> Innovative IT </span><br /> <span className=" title__last bannerHeadding"><span>Solutions</span></span></h2>
                                        <p> Revolutionize your business with our advanced IT solutions, driving progress and ensuring sustained innovation. </p>
                                        <div className="btn-box">
                                            {/* <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item p_relative">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-box p_relative">
                                        <div className="sub__title">
                                            <h4 className="p_relative"> <span className=" two">Better Future</span></h4>
                                        </div>
                                        <h2 className="p_relative"><span className="bannerHeadding">Unrivaled QA </span><br /> <span className=" title__last bannerHeadding"><span>Excellence</span></span></h2>
                                        <p>Experience precision beyond expectations with our quality assurance services, guaranteeing top-notch performance. </p>
                                        <div className="btn-box">
                                            {/* <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Contact Us</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="slide-item p_relative">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-box p_relative">
                                        <div className="sub__title">
                                            <h4 className="p_relative"> <span className=" two">Better Future</span></h4>
                                        </div>
                                        <h2 className="p_relative"><span className="bannerHeadding">Mastery in </span><br /> <span className=" title__last bannerHeadding"><span>Publishing</span></span></h2>
                                        <p>Unlock creativity and inspire minds with our mastery in publishing, crafting compelling narratives that leave a lasting impact. </p>
                                        <div className="btn-box">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="slide-item p_relative">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="content-box p_relative">
                                    <div className="sub__title">
                                        <h4 className="p_relative"> <span className="slider-text-anim two">Better Future</span></h4>
                                    </div>
                                    <h2 className="p_relative"><span className="slider-text-anim">Banking Excellence </span><br /> <span className="slider-text-anim title__last"><span>Unleashed</span></span></h2>
                                    <p>Elevate financial experiences with our comprehensive banking solutions, tailored for a secure and prosperous future. </p>
                                    <div className="btn-box">
                                        
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> */}
                </OwlCarousel>
                {/* <div className="banner__bottom">
                <div className="row">
                    <div className="col-lg-6 col-md-12"></div>
                    <div className="col-lg-6 col-md-12">
                        <div className="banner__mission__block">
                            <div className="mission__block">
                                <h3>Our Vision</h3>
                                <p>Providing legal advice, contract drafting, compliance assistance.</p>
                            </div>
                            <div className="mission__block">
                                <h3>Our Mission</h3>
                                <p>Providing legal advice, contract drafting, compliance assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </section>
    );
};

export default Banner;
