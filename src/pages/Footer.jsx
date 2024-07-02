import React from 'react'
import './footer.css'
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of servie',
        'privacy Policy'
    ];
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculis',
    ];
  return (
    <footer className="footer" id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                           <span>CINEMA</span>
                        </a>
                        <p>video is for educational purpose only. Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism</p>
                        <div className="social-links mt-3">
                            <a href="#" className="twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="#" className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#" className="instagram">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#" className="youtube">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Cinemas</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>LIC Colony <br />
                        hydetabad, Madhapur 500038 <br />
                        Telangana <br/>
                        <strong>phone:</strong> +91 912657436 <br/>
                        <strong>Email:</strong> info@example.com <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{''}
                <strong>
                    <span>DStudio Technology</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href='#'>DStudio Technology</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
