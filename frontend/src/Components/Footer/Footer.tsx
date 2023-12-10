import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import logo from '../Footer/'
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'


const Logo=require('../../assets/logo.png')

export default function Footer() {
  return (



    <MDBFooter  className='text-center text-lg-left footer-container'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            {/* The logo component for image is called below */}
            <img src={Logo} alt='logo' className='logo'/>

          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <div className='footer-list'>
              <h6 ><a href='#about'>About Us</a></h6>
              <h6 ><a href='#stats'>Stats</a></h6>
            </div>

            <div className='social-container'>
               
              <h5>Connect with PledgePilot :  </h5>
              <br/>

              <FaTwitter className='icon' />
              <FaInstagram className='icon' />
              <FaFacebook className='icon' />
              <FaYoutube className='icon' />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3 footer-container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          pledgepilot.com
        </a>
      </div>
    </MDBFooter>
  );
}