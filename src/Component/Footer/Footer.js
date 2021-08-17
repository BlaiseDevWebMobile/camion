import React from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {Button, Nav} from "react-bootstrap";

function Footer() {
  return (
    <div className='footer-container mt-5'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Rejoignez notre adhésion exclusive pour recevoir les dernières nouvelles et tendances
        </p>
        <p className='footer-subscription-text'>
          Vous pouvez vous abonner à tout moment.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button>S'abonner</Button>
          </form>
        </div>
        <hr style={{
          color: "red",
          backgroundColor: "#fff",
          height: 0.8,
          border: 'none'
        }} className={'my-2'}/>
      </section>

      <div className='footer-links'>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Apropos</h2>
            <Nav.Link to='/'>Apropos</Nav.Link>
            <Nav.Link to='/'>Activités</Nav.Link>
            <Nav.Link to='/'>Confidentialité</Nav.Link>

          </div>
          <div className='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Nav.Link to='/'>Par Email</Nav.Link>
            <Nav.Link to='/'>Whatsapp</Nav.Link>
            <Nav.Link to='/'>Téléphone</Nav.Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Nav.Link to='/'>Instagram</Nav.Link>
            <Nav.Link to='/'>Facebook</Nav.Link>
            <Nav.Link to='/'>Youtube</Nav.Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/*<Nav.Link to='/' className='social-logo'>*/}
            {/*  /!*<MdFingerprint className='navbar-icon' />*!/*/}
            {/*  EB-COMPANY*/}
            {/*</Nav.Link>*/}
          </div>
          <small className='website-rights'>Design by Burundi Jobs © {new Date().getFullYear()}{" "}</small>
          <div className='social-icons'>
            <Nav.Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Nav.Link>
            <Nav.Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Nav.Link>
            <Nav.Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Nav.Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
