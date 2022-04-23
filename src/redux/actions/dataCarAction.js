import axios from 'axios';

export const dataCarAction = () => {
    return async (dispatch) => {
        const { data } = await axios('https://rent-cars-api.herokuapp.com/admin/car')
        data.forEach((car) => {
            car.passenger = "4 orang";
            car.transmission = "Manual";
            car.production = "Tahun 2020";
        })
        dispatch({ type: 'SET_LIST_CAR', payload: data })
    }
}
