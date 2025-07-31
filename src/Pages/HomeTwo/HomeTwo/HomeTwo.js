import React from 'react';
import HeaderTwo from '../../Header/HeaderTwo';
import FooterTwo from '../../Footer/FooterTwo';
import Blog from '../../HomeOne/Blog/Blog';
import Banner from '../../HomeTwo/Banner/Banner';
import About from '../../HomeTwo/About/About';
import Service from '../../HomeTwo/Service/Service';
import Choose from '../../HomeTwo/Choose/Choose';
import Brand from '../../HomeTwo/Brand/Brand';
import Pricing from '../../HomeTwo/Pricing/Pricing';
import Accomplised from '../../HomeTwo/Accomplised/Accomplised';
import Portfolio from '../../HomeTwo/Portfolio/Portfolio';
import { pageTitle } from '../../PageTitle';
import Cargo from '../Cargo/Cargo';


const HomeOne = () => {
    pageTitle('EPC Solutions & Srvices');

    const brandData = [
        {
          id: 1,
          title: 'PDF Manipulations',
        },
        {
          id: 2,
          title: 'E-Book Conversion',
        },
        {
          id: 3,
          title: 'PDF Accessibility',
        },
        {
          id: 4,
          title: 'Web Accessibility',
        },
        {
          id: 5,
          title: 'EPub Accessibility',
        },
        // {
        //   id: 6,
        //   title: 'Marketing',
        // },
        // {
        //   id: 7,
        //   title: 'Advertising',
        // },
      ];
    const itserviceData = [
        {
          id: 1,
          title: 'Software Development',
        },
        {
          id: 2,
          title: 'Quality Assurance',
        },
        {
          id: 3,
          title: 'UI/UX Design',
        },
        {
          id: 4,
          title: 'FinTech Solutions',
        },
        {
          id: 5,
          title: 'Mobile App Development',
        },
        {
          id: 6,
          title: 'Computer Vision',
        },
        {
          id: 6,
          title: 'Machine Learning',
        },
      ];
    const cargoServiceData = [
        {
          id: 1,
          title: 'Booking Entry',
        },
        {
          id: 2,
          title: 'Vessel Entry',
        },
        {
          id: 3,
          title: 'Cargo Receipt Entry (CFS only)',
        },
        {
          id: 4,
          title: 'Load Plan / SP Draft Creation (CFS only)',
        },
        {
          id: 4,
          title: 'VGM Submission',
        },
      ];
    return (
        <>
            <div className="home__two">
                <HeaderTwo></HeaderTwo>
                <Banner></Banner>
                {/* <Service></Service> */}
                <About></About>
                {/* <Brand brandData={itserviceData}></Brand> */}
                <Accomplised></Accomplised>
                <Cargo></Cargo>
                {/* <Brand brandData={cargoServiceData}></Brand> */}
                <Choose></Choose>
                {/* <Brand brandData={brandData}></Brand> */}
                {/* <Pricing></Pricing> */}
                {/* <Portfolio></Portfolio> */}
                {/* <Blog></Blog> */}
                <FooterTwo></FooterTwo>
            </div>
        </>
    );
};

export default HomeOne;