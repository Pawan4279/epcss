import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BannerBg from "../../../assets/images/shapes/shape-07.png";
import BannerBg2 from "../../../assets/images/shapes/shape-08.png";
import AboutUs from "../../../assets/images/knowledge-learning-academics-study-scissors-ruler.jpg";
import s2 from "../../../assets/images/resource/02.png";

const CuSpan = ({ children }) => (<span style={{ color: "#F6EC4F", fontSize: 40 }}>{children}</span>)

const Cargo = () => {
  const uxUiDesignRef = useRef(null);
  const webDesignRef = useRef(null);
  const developmentRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = [uxUiDesignRef, webDesignRef, developmentRef];

      elements.forEach((ref) => {
        if (ref.current) {
          const elementTop = ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight - 50) {
            setIsVisible(true);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Logic to handle appearance
      const elements = [uxUiDesignRef, webDesignRef, developmentRef];

      elements.forEach((ref) => {
        if (ref.current) {
          const percent = ref.current.getAttribute('data-percent');
          ref.current.style.width = percent;
          ref.current.classList.add('counted');
        }
      });
    }
  }, [isVisible]);
  useEffect(() => {
    const text_2 = document.querySelector(".text_2");
    if (text_2) {
      text_2.innerHTML = text_2.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);
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
                        <div className="">
                            <div className="sub__title">
                                <h4 style={{fontSize:'30px',fontWeight:'700'}}>Why choose us</h4>
                            </div>
                            <div className="title">
                                <h2>Our e-Learning Solutions</h2>
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
                          <h2 id='secSec' className="sec_section"><span>E-learning Development</span></h2>
                        </div>
                        <div className="normal__text">
                        <p><CuSpan>“</CuSpan>At Nexority Infotech, we are dedicated to creating immersive and comprehensive e-learning experiences tailored to meet the unique needs of various industries. Our expertise spans from interactive course creation to advanced video transcription and multilingual translation services, ensuring that educational content is accessible, engaging, and impactful for diverse audiences.

Whether you're looking to develop custom training programs, translate educational materials into multiple languages, or streamline your digital learning platforms, Nexority Infotech has the solutions to elevate your e-learning offerings. We understand the importance of personalized and effective learning experiences, and our services are designed to help organizations stay ahead in today’s rapidly evolving digital landscape.

Choose Nexority Infotech to enhance your digital education capabilities with innovative solutions that drive engagement, improve knowledge retention, and reach a broader audience. Let us help you bring your e-learning vision to life with seamless technology integration and a commitment to quality.<CuSpan>”</CuSpan></p>
                        </div>
                        <div className="btn-box">
                            <Link to="https://tech.nexorityinfotech.com/" className="theme-btn theme-btn-one mt-3"><i className="icon-02"></i> Explore</Link>
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

export default Cargo;
