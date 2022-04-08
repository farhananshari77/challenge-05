import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Layout from "../components/Layout";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailCar = () => {
    const { idCar } = useParams();
    const [detailCar, setDetailCar] = useState({});
    const reqData = async () => {
        const { data } = await axios(`https://rent-cars-api.herokuapp.com/admin/car/${idCar}`);
        setDetailCar(data);
    };

    useEffect(() => {
        reqData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailCar]);

    return (
        <>
        <Layout>
            <div className="header-nav"><br /><br /><br /><br /><br /><br /><br /></div>
            <section className="position-relative container">
                <div className="col-10 card position-absolute top-0 start-50 translate-middle card-search">
                    <div className="row card-body">
                        <p>Pencarianmu</p>
                        <div className="col-6 col-sm-6 col-lg-3 label-input">
                            <label className="form-label font-form">
                                Tipe Driver
                            </label>
                            <select className="form-control form-find-detail" name="type" >
                            </select>
                        </div>
                        <div className="col-6 col-sm-6 col-lg-3 label-input">
                            <label className="form-label font-form" for="date">
                                Tanggal
                            </label>
                            <input className="form-control form-find-detail" id="date" name="date" type="date" value="" />
                        </div>
                        <div className="col-6 col-sm-6 col-lg-3 label-input">
                            <label className="form-label font-form" for="time">
                                Waktu Jemput/Ambil
                            </label>
                            <input className="form-control form-find-detail" id="time" name="time" type="time" value="" />
                        </div>
                        <div className="col-6 col-sm-6 col-lg-3 label-input">
                            <label className="form-label font-form" for="totalPassenger">
                                Jumlah Penumpang (optional)
                            </label>
                            <input className="form-control form-find-detail" id="totalPassenger" name="totalPassenger" type="number" value="" />
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br />
            <section className="container d-flex col-9 justify-content-center">
                <div className='row'>
                    <div className='col-12 col-sm-8 col-lg-8'>
                        <div className='card card-car xm-1 p-2'>
                            <label className='detail-font-bold my-2'>Tentang Paket</label>
                            <span className='detail-font-word'>Include</span>
                            <ul className='detail-font-list'>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li> 
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <span className='detail-font-word'>Exclude</span>
                            <ul className='detail-font-list'>
                                <li>Tidak termasuk biaya makan sopir Rp 75.00/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li> 
                            </ul>
                            <label className='detail-font-bold my-2'>Refund, Reschedule, Overtime</label>
                            <ul className='detail-font-list'>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Ridak termasuk akomodasi penginapan</li> 
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Ridak termasuk akomodasi penginapan</li> 
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Ridak termasuk akomodasi penginapan</li> 
                            </ul>                            
                        </div>
                        <div className="d-flex justify-content-end my-3">
                            <button className='btn my-2 my-sm-0 text-light color-btn-green'>Lanjutkan Pembayaran</button>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 col-lg-4'>
                        <div className='card card-car xm-1 p-2'>
                            <img src={detailCar.image} className="center m-4 mt-5 img-fluid img-car" alt={detailCar.name}/>
                            <div className="card-body">
                                <span className="d-block mb-2 detail-font-bold" key={detailCar.id}>{detailCar.name} / {detailCar.category}</span>
                                <span className="d-block detail-font-small mb-2 " >
                                    <img src="/fi_users.png" className='ms-1' alt="" height="12px" width="12px" />
                                    4 orang
                                    <img src="/fi_settings.png" className='ms-1' alt="" height="12px" width="12px"/>
                                    Medium
                                    <img src="/fi_calendar.png" className='ms-2' alt="" height="12px" width="12px"/>
                                    Tahun 2020
                                </span>
                                <div className='row'>
                                    <span className='col-4'>Total</span>
                                    <span className="col-8 mb-2 detail-font-bold" key={detailCar.id}>Rp. {detailCar.price} / hari</span>
                                </div>
                                <button className='form-control btn my-2 my-sm-0 text-light color-btn-green'>Lanjutkan Pembayaran</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );
};

export default DetailCar;
