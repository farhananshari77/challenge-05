import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

const ContentHeader = () => {
    return (
        <>
            <section className="header-nav" id="hero">
            <br /><br />
            <div className="container">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
                    <h1 className="font-sewa">
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </h1>
                    <p className="font-p">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/>
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/>
                    untuk sewa mobil selama 24 jam.
                    </p>
                    <Link id="btn-find" to="/find-car" className="btn my-2 my-sm-0 text-light color-btn-green">
                        Mulai Sewa Mobil
                    </Link>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6">                   
                    <div>
                        <img className="img-fluid" src="/img_car.png" alt="car" />
                    </div>
                </div>            
                </div>       
            </div>
            </section>
        </>
    );
};
    
export default ContentHeader;