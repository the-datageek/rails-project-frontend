import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={socialMediaStyle}>
        <a href="https://www.facebook.com"><FaFacebook size={25} /></a>
        <a href="https://www.twitter.com"><FaTwitter size={25} /></a>
        <a href="https://www.instagram.com"><FaInstagram size={25} /></a>
      </div>
      <div style={copyright}>
        © 2023 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'orange',
  padding: '2rem',
  marginTop: '2rem',
};

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const copyright = {
  fontSize: '0.8rem',
  padding: '5px'
};

export default Footer;
