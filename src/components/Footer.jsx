import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container container-fluid my-5">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3">
                            <p className="font-p">
                                Jalan Suroyo No. 161 Mayangan <br />Kota Probolonggo 672000
                            </p>
                            <p className="font-p">
                                binarcarrental@gmail.com
                            </p>
                            <p className="font-p">
                                081-233-334-808
                            </p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 d-flex flex-column px-5">
                            <a href="#ourServices" className="order-0 font-nav-ft mb-2" >
                                Our services
                            </a>
                            <a href="#whyUs" className="order-1 font-nav-ft my-2">
                                Why Us
                            </a>
                            <a href="#testimonial" className="order-2 font-nav-ft  my-2">
                                Testimonial
                            </a>
                            <a href="#faq" className="order-3 font-nav-ft my-2">
                                FAQ
                            </a>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-3">
                            <p className="font-p">
                                Connect with us
                            </p>
                            <div className="d-flex">
                            <a href="#hero">
                                <img className="me-2" src="/icon_facebook.png" alt="icon_fb" />
                            </a>
                            <a href="#hero">
                                <img className="me-2" src="/icon_instagram.png" alt="icon_ig"/>
                            </a>
                            <a href="#hero">
                                <img className="me-2" src="/icon_twitter.png" alt="icon_twt"/>
                            </a>
                            <a href="#hero">
                                <img className="me-2" src="/icon_mail.png" alt="icon_mail"/>
                            </a>
                            <a href="#hero">
                                <img className="me-2" src="/icon_twitch.png" alt="icon_twch"/>
                            </a>  
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-3">
                            <p className="font-p">
                                Copyright Binar 2022
                            </p>
                            <a href="#hero">
                                <img src="/logo.png" alt="logo" width="100" height="34" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;