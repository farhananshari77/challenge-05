import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Layout from "../components/Layout";
import ContentHeader from "../components/ContentHeader";
import axios from 'axios';
import ListCar from './ListCar';

const FindCar = () => {
    useEffect(() => {
        document.getElementById("btn-find").style.display = "none";
    }, []);
    const [listCar, setListCar] = useState([]);
    const [isClickSerch, setIsClickSearch] = useState(false);
    const [isBtnSerch, setIsBtnSearch] = useState(true);

    const reqData = async () => {
        const { data } = await axios(`https://rent-cars-api.herokuapp.com/admin/car`);
        setListCar(data);
        setIsClickSearch(true);
      };

    return (
        <>
            <Layout>
                {isClickSerch ? (
                    <><div className="header-nav"><br /><br /><br /><br /><br /><br /><br /></div></>
                ) : <ContentHeader />}
                <section className="position-relative container">
                    <div className="col-10 card position-absolute top-0 start-50 translate-middle card-search">
                        <div className="row card-body">
                            {isClickSerch ? (
                                <><p>Pencarianmu</p></>
                            ) : null}
                            <div className="col-6 col-sm-6 col-lg-3 label-input">
                                <label className="form-label font-form">
                                    Tipe Driver
                                </label>
                                <select className="form-control" name="type">
                                    <option value="Dengan Sopir">
                                        Dengan Sopir
                                    </option>
                                    <option value="Tanpa Sopir (Lepas Kunci)">
                                        Tanpa Sopir (Lepas Kunci)
                                    </option>
                                    <option disabled="" value="default">
                                        Pilih Tipe Driver
                                    </option>
                                </select>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 label-input">
                                <label className="form-label font-form" for="date">
                                    Tanggal
                                </label>
                                <input className="form-control" id="date" name="date" type="date" />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 label-input">
                                <label className="form-label font-form" for="time">
                                    Waktu Jemput/Ambil
                                </label>
                                <input className="form-control" id="time" name="time" type="time" />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-3 label-input">
                                <label className="form-label font-form" for="totalPassenger">
                                    Jumlah Penumpang (optional)
                                </label>
                                <input className="form-control" id="totalPassenger" name="totalPassenger" placeholder="Jumlah Penumpang" type="number" min="1" />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2">
                                {isBtnSerch ? (
                                    <button onClick={() => {setIsBtnSearch(false); reqData();}} className="btn font-nav text-light color-btn-green btn-find">
                                        Cari Mobil
                                    </button> 
                                ) : (
                                    <button onClick={() => {setIsBtnSearch(true); setIsClickSearch(false);}} className="btn font-nav btn-find btn-edit">
                                        Edit
                                    </button> 
                                )} 
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br /><br /><br /><br /><br />
                <section className="container d-flex col-9 justify-content-center">
                    <div className='row'>
                        {isClickSerch ? (
                            <>{listCar.length > 0 && <ListCar listCar={listCar} />}</>
                        ) : null}
                    </div>
                </section>
                
            </Layout>
        </>
    );
};

export default FindCar;