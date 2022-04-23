const initialState = {
    dataListCar: null,
}

const dataCarReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_LIST_CAR":
            return {
                ...state,
                dataListCar: action.payload
            }
        default: return state
    }
}

export default dataCarReducer;
