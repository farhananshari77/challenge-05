import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Layout from "../components/Layout";
import ContentHeader from "../components/ContentHeader";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const FindCar = () => {
    useEffect(() => {
        document.title = "Cari Mobil";
        console.log('mount it!');
    }, []);
    const navigate = useNavigate();

    return (
        <>
            <Layout>
                <ContentHeader />
                <section className="position-relative container">
                    <div className="col-10 card position-absolute top-0 start-50 translate-middle card-search">
                        <div className="row card-body">
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
                                <button onClick={() => navigate("/find-car/search")} className="btn font-nav text-light color-btn-green btn-find">
                                    Cari Mobil
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default FindCar;