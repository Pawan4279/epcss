import React from 'react';
import shape4 from "../../../assets/images/shapes/price-bg.png";
import shape6 from "../../../assets/images/shapes/shape-12.png";
import shape7 from "../../../assets/images/resource/choose-03.png";
import Vision from "../../../assets/images/resource/vission.png";
import Mission from "../../../assets/images/resource/mission.png";
import { Link } from 'react-router-dom';


const Pricing = () => {
    const pricingData = [
        {
            id: 1,
            price_name: 'Basic',
            list_a: '20GB Space',
            list_b: '10GB Bandwidth',
            list_c: '2 Databases',
            list_d: '1 Accounts',
            list_e: '24th Support',
            amount: '200',
            time: 'm',
            delay: '100ms',
        },
        {
            id: 2,
            price_name: 'Personal',
            list_a: '20GB Space',
            list_b: '10GB Bandwidth',
            list_c: '2 Databases',
            list_d: '1 Accounts',
            list_e: '24th Support',
            amount: '300',
            time: 'm',
            delay: '200ms',
        },
        {
            id: 3,
            price_name: 'Business',
            list_a: '20GB Space',
            list_b: '10GB Bandwidth',
            list_c: '2 Databases',
            list_d: '1 Accounts',
            list_e: '24th Support',
            amount: '400',
            time: 'm',
            delay: '300ms',
        },
    ];
    return (
        <section className="pricing__section see__pad p_relative">
            <div className="pattern-layer">
                <div className=" pattern-1 p_absolute" data-parallax='{"y": -50}' style={{ backgroundImage: `url(${shape4})` }}></div>
            </div>
            <div className="auto-container">
            <div className="col-lg-5 col-md-16">
                        <div className="choose_img__block">
                            <div className="" style={{paddingBottom: 0}}>
                                <div className="sub__title">
                                    <h4>EPCSolutions & services’s Motto</h4>
                                </div>
                                <div className="title">
                                    <h2>Our Path to Innovation and Excellence</h2>
                                </div>
                            </div>
                            <div className="choose_img__two p_relative">
                                {/* <div className="pattern-layer">
                                <div className=" pattern-3 p_absolute" data-parallax='{"y": 10}' style={{ backgroundImage: `url(${shape5})` }}></div>
                            </div> */}
                                {/* <div className="pattern-layer">
                                    <div className=" pattern-4 p_absolute" data-parallax='{"y": -10}' style={{ backgroundImage: `url(${shape6})` }}></div>
                                </div> */}
                                {/* <figure className="wow zoomIn animated animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <img src={shape7} alt="" />
                            </figure> */}
                            </div>
                        </div>
                    </div>
                {/* <div className="title__data">
                    <div className="sub__title">
                        <h4>Pricing</h4>
                    </div>
                    <div className="title">
                        <h2>Product Price</h2>
                    </div>
                </div> */}
                {/* <div className="row">
                    {pricingData.map((item, id)=>(
                        <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay={item.delay} data-wow-duration="1500ms" key={id}>
                            <div className="price__content p_relative">
                                <div className="price__data">
                                    <h5>{item.price_name}</h5>
                                    <h4><span>$</span>{item.amount} / <span>{item.time}</span></h4>
                                </div>
                                <div className="price__block">
                                    <div className="price__list">
                                        <ul>
                                            <li>{item.list_a}</li>
                                            <li>{item.list_b}</li>
                                            <li>{item.list_c} </li>
                                            <li>{item.list_d}</li>
                                            <li>{item.list_e}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price__icon">
                                    <i className="icon-16"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="row">
                    <div className="col-lg-6 col-md-16 d-flex justify-content-center">
                        <div className="choose_img_block">
                            {/* <div className="title__data">
                                <div className="sub__title">
                                    <h4>Why choose us</h4>
                                </div>
                                <div className="title">
                                    <h2>Our Approach</h2>
                                </div>
                            </div> */}
                            {/* <div className="choose_img__two p_relative">
                        <div className="about__two__img__block p_relative">
                        <figure className="pri_img">
                            <img className='img_fluid' src={AboutUs} alt="" />
                        </figure>
                    </div>
                        </div> */}
                         <div className="card_mission">
                                <div className="card_content_2">
                                    <figure>
                                        <img src={Vision} alt="" />
                                    </figure>
                                    <h2 style={{paddingTop: 20}}>Our Mission</h2>
                                    <p>At EPCSolutions & services Infotech, we empower businesses worldwide with cutting-edge IT services, pioneering publishing solutions, and advanced AI/ML applications, ensuring seamless integration and delivering strategic insights for unparalleled success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-16 justify-content-center">
                        <div className="choose__text_block">
                           
                            <div className="card_mission">
                                <div className="card_content">
                                    <figure>
                                        <img src={Mission} alt="" />
                                    </figure>
                                    <h2 style={{paddingTop: 20}}>Our Vision</h2>
                                    <p>EPCSolutions & services Infotech envisions global leadership in transformative technology, setting industry benchmarks through innovative IT services and publishing solutions.</p>
                                </div>


                            </div>
                            {/* <div className="title two">
                                <h2 className="sec_section"><span>IT SERVICES & SOLUTIONS</span></h2>
                            </div> */}
                            {/* <div className="normal__text">
                                <p>"EPCSolutions & services Infotech – your trusted source for cutting-edge IT services, Software  Testing, AI/ML technologies, and optimized cargo logistics. Choose us for seamless technology integration and business success."</p>

                            </div> */}
                            {/* <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one mt-3"><i className="icon-02"></i> Contact Us</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;