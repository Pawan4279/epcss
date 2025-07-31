import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BannerBg from "../../../assets/images/shapes/shape-07.png";
import BannerBg2 from "../../../assets/images/shapes/shape-08.png";
import AboutUs from "../../../assets/images/resource/new_chossen.avif";
import s2 from "../../../assets/images/resource/02.png";

const CuSpan = ({ children }) => (<span style={{ color: "#F6EC4F", fontSize: 40 }}>{children}</span>)

const About = () => {
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
    <section className="about___two p_relative see__pad">
      <div className="pattern-layer">
        <div className=" pattern-1 p_absolute" data-parallax='{"x": -100}' style={{ backgroundImage: `url(${BannerBg})` }}></div>
      </div>
      <div className="auto-container">
        <div className="row">

          <div className="col-lg-7 col-md-16 mb-4">
            <div style={{paddingTop:"0px"}} className="choose__text__block">
              {/* <h2>Unlock The Potential Of Your Business.</h2> */}
              <div id='hideDisplayWindows' className="">
                <div className="sub__title">
                  <h4>Why choose us</h4>
                </div>
                <div className="title">
                  <h2>Our IT Solutions</h2>
                </div>
              </div>
              <div className="title two">
                <h2 id='secSec' className="sec_section"><span>IT SERVICES & SOLUTIONS</span></h2>
              </div>
              <div className="normal__text">
                <p><CuSpan>“</CuSpan>Nexority Infotech is your trusted source for cutting-edge IT services, comprehensive software testing, and advanced AI/ML technologies. We specialize in crafting seamless technology integrations that empower businesses to thrive in the digital era. Our expert team is dedicated to optimizing processes, enhancing operational efficiency, and paving the way for sustainable growth.

                  Choose Nexority Infotech for solutions that prioritize innovation, reliability, and measurable success. Let us be your partner in transforming challenges into opportunities, delivering tailored technology solutions that align with your business objectives<CuSpan>”</CuSpan></p>

              </div>
              <div className="btn-box">
                <Link to="http://tech.nexorityinfotech.com/" className="theme-btn theme-btn-one mt-3"><i className="icon-02"></i> Explore</Link>
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
                  <h2>Our IT Solutions</h2>
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
};

export default About;
