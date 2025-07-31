import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, News, Page, Services } from "./Menu";
import DropDown from "./DropDown";
import Logo from "../../assets/images/nexority_logo.png";

export default function Header({ variant }) {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);

    return (
        <>
            <header className={`main-header header__style__one two ${ variant ? variant : "" } header__sticky ${isSticky ? "fixed-header" : ""}`}>
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link to="/"><img style={{width:'auto'}} src={Logo} alt="Nexority" /></Link>
                                </figure>
                            </div>
                          
                            <div className="btn-box">
                                {/* <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Discuses</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><Link to="/"><img style={{width:"auto"}} src={Logo} alt="Nexority" /></Link></figure>
                            </div>
                            {/* <div className="menu-area clearfix">
                                <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix home-menu">
                                            <li className="dropdown" >
                                                <NavLink to="/">Home</NavLink>
                                                <DropDown>
                                                    <ul>
                                                        <Home />
                                                    </ul>
                                                </DropDown>
                                            </li>
                                            <li >
                                                <NavLink to="/about">About</NavLink>
                                            </li>
                                            <li className="dropdown" >
                                                <NavLink to="/services">Services</NavLink>
                                                <DropDown>
                                                    <ul>
                                                        <Services />
                                                    </ul>
                                                </DropDown>
                                            </li>
                                            <li className="dropdown" >
                                                <NavLink to="/page">Page</NavLink>
                                                <DropDown>
                                                    <ul>
                                                        <Page />
                                                    </ul>
                                                </DropDown>
                                            </li>
                                            <li className="dropdown" >
                                                <NavLink to="/blog">Blog</NavLink>
                                                <DropDown>
                                                    <ul>
                                                        <News />
                                                    </ul>
                                                </DropDown>
                                            </li>  
                                            <li >
                                                <NavLink to="/contact">Contact</NavLink>
                                            </li> 
                                        </ul>
                                    </div>
                                </nav>
                            </div> */}
                            <div className="btn-box">
                                <Link to="/contact" className="theme-btn theme-btn-one"><i className="icon-02"></i> Discuses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}
