import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';

const ContentHome = () => {
    return (
        <>
            <br></br>
            <section  id="ourServices">
                <div className="container">
                    <div className="row m-5">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
                            <img className="img-fluid" src="/img_service.png" alt="img-service" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 px-4 py-5">
                            <h4 className="font-best">
                                Best Car Rental for any kind of trip in (Lokasimu)!
                            </h4>
                            <p className="font-p">
                                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                            </p>
                            <ul className="list-unstyled">
                                <li className="my-2">
                                    <img className="me-2" src="/Group 53.png" alt="list" />
                                    Mobil Dengan Supir di Bali 12 Jam
                                </li>
                                <li className="my-2">
                                    <img className="me-2" src="/Group 53.png" alt="list" />
                                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                                    </li>
                                <li className="my-2">
                                    <img className="me-2" src="/Group 53.png" alt="list" />
                                    Sewa Mobil Jangka Panjang Bulanan
                                </li>
                                <li className="my-2">
                                    <img className="me-2" src="/Group 53.png" alt="list" />
                                    Gratis Antar - Jemput Mobil di Bandara
                                </li>
                                <li className="my-2">
                                    <img className="me-2" src="/Group 53.png" alt="list" />
                                    Layanan Airport Transfer / Drop In Out
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <section  id="whyUs">
                <div className="container my-5">
                    <div className="align-items-center">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="font-best">Why Us?</h1>
                            <p className="font-p">Mengapa harus pilih Binar Car Rental?
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row align-items-center">
                        <div className="card m-2" >
                            <div className="card-body">
                                <img className="mb-3" src="/icon_complete.png" alt="complete" />
                                <h6 className="card-title">Mobil Lengkap</h6>
                                <p className="card-text font-p">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                        <div className="card m-2">
                            <div className="card-body">
                                <img className="mb-3" src="/icon_price.png" alt="price"/>
                                <h6 className="card-title">Harga Murah</h6>
                                <p className="card-text font-p">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                        <div className="card m-2">
                            <div className="card-body">
                                <img className="mb-3" src="/icon_24hrs.png" alt="24h" />
                                <h6 className="card-title">Layanan 24 Jam</h6>
                                <p className="card-text font-p">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                        <div className="card m-2">
                            <div className="card-body">
                                <img className="mb-3" src="/icon_professional.png" alt="pro" />
                                <h6 className="card-title">Sopir Profesional</h6>
                                <p className="card-text font-p">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br><br></br>
            <section  id="testimonial">
                <div className="container">
                    <div className="align-items-center">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="font-best text-center">Testimonial</h1>
                            <p className="font-p text-center">
                                Berbagai review positif dari para pelanggan kami
                            </p>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 my-3">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="/list testi.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="/list testi.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="/list testi.png" alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                    <a href="#carouselExampleControls" className='mx-2' role="button" data-slide="prev">
                        <img src="/Left button.png" alt="left"/>
                    </a>
                    <a href="#carouselExampleControls" className='mx-2' role="button" data-slide="next">
                        <img src="/Right button.png" alt="right" />
                    </a>
                    </center>
                </div>
            </section>
            <br></br><br></br>
            <section  id="cta_banner">
                <center>
                    <div className="container m-5 bg-rectangle p-5">
                        <div className="align-items-center">
                            <h1 className="font-sewa text-center text-light">
                                Sewa Mobil di (Lokasimu) Sekarang
                            </h1>
                            <p className="font-p text-light" > 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <Link to="/find-car" className="btn m-3 font-nav text-light color-btn-green">
                                Mulai Sewa Mobil
                            </Link>
                        </div>
                    </div>
                </center>
            </section>
            <br></br><br></br>
            <section  id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                            <h1 className="font-best">Frequently Asked Question</h1>
                            <p className="font-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6">
                            <ul className="list-unstyled">
                            <li className="border p-3">
                                <p className="font-p pt-2 position-relative">
                                Apa saja syarat yang dibutuhkan?
                                <img className="position-absolute top-50 end-0 translate-middle-y mt-2 me-2" src="/Vector.png" alt="vector"/>
                                </p>
                            </li>
                            <li className="my-3 border p-3">
                                <p className="font-p pt-2 position-relative">
                                Berapa hari minimal sewa mobil lepas kunci?
                                <img className="position-absolute top-50 end-0 translate-middle-y mt-2 me-2" src="/Vector.png" alt="vector"/>
                                </p>
                            </li>
                            <li className="my-3 border p-3" >
                                <p className="font-p pt-2 position-relative">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                <img className="position-absolute top-50 end-0 translate-middle-y mt-2 me-2" src="/Vector.png" alt="vector" />
                                </p>
                            </li>
                            <li className="my-3 border p-3" >
                                <p className="font-p pt-2 position-relative">  
                                Apakah Ada biaya antar-jemput?
                                <img className="position-absolute top-50 end-0 translate-middle-y mt-2 me-2" src="/Vector.png" alt="vector" />
                                </p>
                            </li>
                            <li className="my-3 border p-3" >
                                <p className="font-p pt-2 position-relative">
                                Bagaimana jika terjadi kecelakaan
                                <img className="position-absolute top-50 end-0 translate-middle-y mt-2 me-2" src="/Vector.png" alt="vector" />
                                </p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
    
export default ContentHome;