import { Link } from 'react-router-dom';
const ListCar = ({ listCar }) => {
    const price = (value) => {
        const format = value.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');
        return rupiah;
    } ;
  return (
    <>
      {listCar.map((data) => (
        <>
            <div className='col-12 col-sm-12 col-lg-4'>
                <div className='card card-car m-1 p-2'>
                    <img src={data.image} className="center m-4 mt-5 img-fluid img-car" alt={data.name}/>
                    <div className="card-body">
                        <span className="d-block mb-2 list-font-type" key={data.id}>{data.name} / {data.category}</span>
                        <span className="d-block mb-2 list-font-price" key={data.id}>{price(data.price)} / hari</span>
                        <p className='list-font'> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <span className="d-block font-sidebar mb-2 " >
                            <img src="/fi_users.png" className='me-2' alt="" />
                            4 orang
                        </span>
                        <span className="d-block font-sidebar mb-2" >
                            <img src="/fi_settings.png" className='me-2' alt="" />
                            Medium
                        </span>
                        <span className="d-block font-sidebar mb-4" >
                            <img src="/fi_calendar.png" className='me-2' alt="" />
                            Tahun 2020
                        </span>
                        <Link to={`/find-car/detail/${data.id}`}>
                            <button className='form-control btn text-light color-btn-green'>
                                Pilih Mobil
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
      ))}
    </>
  );
};
export default ListCar;