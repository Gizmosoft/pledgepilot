import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
// import logo from '../Footer/'
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";
const Logo = require("../../assets/pledge-pilot-text.png");

export default function Footer() {
  return (
    // <MDBFooter id='footer'  className='text-center text-lg-left footer-container'>
    //   <MDBContainer className='p-4'>
    //     <MDBRow>
    //       <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
    //         {/* The logo component for image is called below */}
    //         <img src={Logo} alt='logo' className='logo'/>

    //       </MDBCol>

    //       <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
    //         <div className='footer-list'>
    //           <h6 ><a href='#about'>About Us</a></h6>
    //           <h6 ><a href='#stats'>Stats</a></h6>
    //         </div>

    //         <div className='social-container'>

    //           <h5>Connect with PledgePilot :  </h5>
    //           <br/>

    //           <FaTwitter className='icon' />
    //           <FaInstagram className='icon' />
    //           <FaFacebook className='icon' />
    //           <FaYoutube className='icon' />
    //         </div>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className='text-center p-3 footer-container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
    //     &copy; {new Date().getFullYear()} Copyright:{' '}
    //     <a className='text-dark' href='https://mdbootstrap.com/'>
    //       pledgepilot.com
    //     </a>
    //   </div>
    // </MDBFooter>

    <footer>
      <div className="footer-container">
      <div className="connect-container">
          <div className="social-icons">
            <h6>Connect with PledgePilot : </h6>
            <div>
              <FaTwitter className="footer-icon" />
              <span className="icon-text">Twitter</span>
            </div>
            <div>
              <FaInstagram className="footer-icon" />
              <span className="icon-text">Instagram</span>
            </div>
            <div>
              <FaFacebook className="footer-icon" />
              <span className="icon-text">Facebook</span>
            </div>
            <div>
              <FaYoutube className="footer-icon" />
              <span className="icon-text">Youtube</span>
            </div>
          </div>
        </div>

        <div className="quick-links">
          <h6>QUICK LINKS</h6>
          <a href="#about">About Us</a>
          <a href="#stats">Stats</a>
          <a href="#careers">Careers</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="pledge-pilot-footer-logo">
          <img src={Logo} alt="logo" className="footer-logo" />
          <div className="footer-text">
          Navigating Dreams, Funding Journeys. Elevate your ambitions with our crowdfunding platform that empowers creators, dreamers, and innovators.
          </div>
        </div>


      </div>
      <hr />
      <div className="copyright-container">
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright © 2018, All Right Reserved{" "}
                    <a href="#">PledgePilot</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
