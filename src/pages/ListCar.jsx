import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch } from 'react-redux';
import { dataCarAction } from '../redux/actions/dataCarAction'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonCar from "../components/ButtonCar";

const ListCar = () => {
    const dispatch = useDispatch();
    dispatch(dataCarAction());

    useEffect(() => {
        document.title = "Hasil Pencarian";
        console.log('mount it!');
    }, []);
    
    const navigate = useNavigate();

    const { dataListCar } = useSelector(
        (globalStore) => globalStore.dataCarReducer
      );
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
                            <button onClick={() => navigate("/find-car")} className="btn font-nav btn-find btn-edit">
                                Edit
                            </button> 
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br /><br />
            <section className="container d-flex col-9 justify-content-center">
                <div className='row'>
                    {dataListCar.map((data) => (
                        <div className='col-12 col-sm-12 col-lg-4'>
                            <div className='card card-car m-1 p-2'>
                                <img src={data.image} className="center m-4 mt-5 img-fluid img-car" alt={data.name}/>
                                <div className="card-body">
                                    <span className="d-block mb-2 list-font-type" key={data.id}>{data.name} / {data.category}</span>
                                    <span className="d-block mb-2 list-font-price" key={data.id}>Rp. {" "}
                                {data.price
                                .toFixed(0)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "} / hari</span>
                                    <p className='list-font'> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <span className="d-block font-sidebar mb-2 " >
                                        <img src="/fi_users.png" className='me-2' alt="" />
                                        {data.passenger}
                                    </span>
                                    <span className="d-block font-sidebar mb-2" >
                                        <img src="/fi_settings.png" className='me-2' alt="" />
                                        {data.transmission}
                                    </span>
                                    <span className="d-block font-sidebar mb-4" >
                                        <img src="/fi_calendar.png" className='me-2' alt="" />
                                        {data.production}
                                    </span>
                                    <Link to={`/find-car/detail/${data.id}`}>
                                        <ButtonCar />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    </>
  );
};
export default ListCar;