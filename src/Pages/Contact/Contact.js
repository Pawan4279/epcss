import React, { useState } from 'react';
import { pageTitle } from '../PageTitle';
import HeaderOne from '../Header/HeaderOne';
import FooterOne from '../Footer/FooterOne';
import BreadCrumb from '../BreadCrumb';
import { Link } from 'react-router-dom';
import contact from "../../assets/images/resource/contact.jpg";
import map from "../../assets/images/resource/map.jpg";
import Header from '../Header/HeaderTwo';
import FooterTwo from '../Footer/FooterTwo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    pageTitle('Contact');
    const form = document.querySelector('.default-form')
    const [allValues, setAllValues] = useState({})



    const SubmitContact = (e) => {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "data": allValues,
            "method": "contactussendemail"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://comixflip.nexorityinfotech.com:8080/Comix/rest/B/main", requestOptions)
            .then(response => response.text())
            .then(result => {
                const res = JSON.parse(result)
                if (res.check == false) {
                    toast.error(res.msg, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        // transition: Bounce,
                    });
                } else {
                    toast.success(res.msg, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        // transition: Bounce,
                    });
                    form.reset();
                }
            })
            .catch(error => console.log('error', error));
    }

    const changeHandler = (e) => {
        setAllValues(prevData => ({ ...prevData, [e?.target?.name]: e?.target?.value }))
    }


    return (

        <>
            <Header></Header>
            <BreadCrumb></BreadCrumb>
            <ToastContainer />
            <section className="contact__page p_relative see__pad">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-ms-12">
                            <div className="contact__left">
                                <figure>
                                    <img src={contact} alt="" />
                                </figure>
                                <h4>Contact Information</h4>
                                <div className="contact__info">
                                    <div className="contact__block">
                                        <div className="icon">
                                            <i className="icon-19"></i>
                                        </div>
                                        <div className="contact__text">
                                            <Link to="tell:3025550107">+91-7828567519</Link> <br />
                                            <Link to="tell:3025550107">+91-8923586153</Link>
                                        </div>
                                    </div>
                                    <div className="contact__block">
                                        <div className="icon two">
                                            <i className="icon-20"></i>
                                        </div>
                                        <div className="contact__text">
                                            <Link to="mailto:willie.jennings@example.com">info@nexorityinfotech.com</Link> <br />
                                            {/* <Link to="mailto:tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="contact__right">
                                <div className="form__title">
                                    <div className="title__data">
                                        <div className="sub__title">
                                            <h4>Contact Us</h4>
                                        </div>
                                        <div className="title">
                                            <h2>Get a Free Quote</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <form onSubmit={SubmitContact} method="post" action="contact.php" className="default-form">
                                        <div className="row clearfix">
                                            <div className="col-xl-6 form-group">
                                                <input type="name" onChange={changeHandler} name="fullname" placeholder="Your Name *" required="" />
                                            </div>
                                            <div className="col-xl-6 col-lg-12 form-group">
                                                <input type="email" onChange={changeHandler} name="email" placeholder="Your Email *" required="" />
                                            </div>
                                            <div className="col-xl-6 col-lg-12 form-group">
                                                <input type="text" onChange={changeHandler} name="subject" placeholder="Your Subject " required="" />
                                            </div>
                                            <div className="col-xl-6 col-lg-12 form-group">
                                                <input type="text" onChange={changeHandler} name="phone" placeholder="Your Phone " required="" />
                                            </div>
                                            <div className="ccol-xl-6 col-lg-12 form-group">
                                                <textarea name="message" onChange={changeHandler} placeholder="Message"></textarea>
                                            </div>
                                            <div className="col-xl-12 form-group message-btn btn-box">
                                                <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="google__map">
            <figure>
                <img src={map} alt="" />
            </figure>
        </div> */}
            <FooterTwo></FooterTwo>
        </>
    );
};

export default Contact;
