import React from 'react';
import shape4 from "../../../assets/images/resource/choose-04.png";
import shape5 from "../../../assets/images/shapes/shape-11.png";
import shape6 from "../../../assets/images/shapes/shape-12.png";
import shape7 from "../../../assets/images/resource/choose-03.png";
import AboutUs from "../../../assets/images/resource/third.png";
import s2 from "../../../assets/images/resource/02.png";
import BannerBg2 from "../../../assets/images/shapes/shape-08.png";
import BannerBg from "../../../assets/images/shapes/shape-07.png";

import { Link } from 'react-router-dom';

const CuSpan = ({children}) => (<span style={{color: "#F6EC4F", fontSize: 40}}>{children}</span>)


const Choose = () => {
    return (
        <section className="accomplised__section__two see__pad">
          <div className="pattern-layer">
            <div className=" pattern-1 p_absolute" data-parallax='{"x": -100}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
          </div>
          <div className="auto-container">
            <div className="row">
    
              <div className="col-lg-7 col-md-16 mb-4">
                <div className="choose__text__block">
                  {/* <h2>Unlock The Potential Of Your Business.</h2> */}
                    <div id='hideDisplayWindows' className="">
                      <div className="sub__title">
                        <h4 style={{fontSize:'30px',fontWeight:'700'}}>Why choose us</h4>
                      </div>
                      <div className="title">
                      <h2>Our Publishing Solutions</h2>
                      </div>
                    </div>
                  <div className="title two">
                  <h2 className="sec_section"><span>Publishing & Authoring</span></h2>
                  </div>
                  <div className="normal__text">
                  <p style={{color: "#fff"}}><CuSpan>“</CuSpan>Nexority Infotech excels in user-friendly PDF to ePub and comic conversions, benefiting publishers, authors, and educators. Our AI products streamline workflows with content extraction, document management, and an efficient Chatbot, emphasizing accessibility, affordability, and eco-friendliness in digital content creation.<CuSpan>”</CuSpan></p>
    
                  </div>
                  <div className="btn-box">
                    <Link to="http://edu.nexorityinfotech.com/" className="theme-btn theme-btn-one mt-3"><i className="icon-02"></i> Explore</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-16">
                <div className="choose_img_block">
                  <div id='hideDisplayMobile' className="">
                    <div className="sub__title">
                      <h4 style={{fontSize:'30px',fontWeight:'700'}}>Why choose us</h4>
                    </div>
                    <div className="title">
                    <h2>Our Publishing Solutions</h2>
                    </div>
                  </div>
                  <div className="choose_img__two p_relative">
                    <div className="about__two__img__block p_relative">
                      <figure className="pri_img">
                        <img className='img_fluid' src={AboutUs} alt="" />
                      </figure>
                    </div>
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
            </div>
          </div>
    
        </section>
      );
    return (
        <section className="choose___two see__pad p_relative">
            {/* <div className="pattern-layer">
                <div className=" pattern-1 p_absolute" data-parallax='{"x": -100}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
            </div> */}
            {/* <div className="pattern-layer">
            <div className=" pattern-1 p_absolute" data-parallax='{"x": -75}' style={{ backgroundImage: `url(${shape4})` }}></div>
        </div> */}
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-5 col-md-16">
                        <div className="choose_img__block">
                            <div className="title__data">
                                <div className="sub__title">
                                    <h4 style={{fontSize:'30px',fontWeight:'700'}}>Why choose us</h4>
                                </div>
                                <div className="title">
                                    <h2>Our Publishing Solutions</h2>
                                </div>
                            </div>
                            <div className="choose_img__two p_relative">
                                <div className="about__two__img__block p_relative">
                                    <figure>
                                        <img src={AboutUs} alt="" />
                                    </figure>
                                </div>
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
                    <div className="col-lg-7 col-md-16">
                        <div className="choose__text__block">
                            {/* <h2>Unlock The Potential Of Your Business.</h2> */}
                            <div className="title two">
                                <h2 className="sec_section"><span>Publishing & Authoring</span></h2>
                            </div>
                            <div className="normal__text">
                                <p><CuSpan>“</CuSpan>Nexority Infotech excels in user-friendly PDF to ePub and comic conversions, benefiting publishers, authors, and educators. Our AI products streamline workflows with content extraction, document management, and an efficient Chatbot, emphasizing accessibility, affordability, and eco-friendliness in digital content creation.<CuSpan>”</CuSpan></p>
                            </div>
                            <div className="btn-box">
                                <Link to="http://edu.nexorityinfotech.com/" className="theme-btn theme-btn-one mt-3"><i className="icon-02"></i> Explore</Link>
                            </div>
                            {/* <div className="customaize__solution">
                            <div className="customaize__block">
                                <h5>Customized Solutions:</h5>
                                <p>We understand that every business has unique needs. </p>
                            </div>
                            <div className="customaize__block">
                                <h5>Customized Solutions:</h5>
                                <p>We understand that every business has unique needs. </p>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;