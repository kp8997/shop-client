import * as types from './actionTypes';

const initState = {
    isAuth : false,
    user : null,
    indexPage : 0,
    isCarInit : false,
    cars : [],
    totalCount : 0,
    currentCount : 0,
}

const reducer = (state = initState, action) => {
    switch(action.type)
    {
        case types.SET_AUTH_FALSE:
            return {
                ...state,
                isAuth : false
            };
        case types.SET_AUTH_TRUE: 
            return {
                ...state,
                isAuth : true
        }   ;
        case types.SET_USER:
            return {
                ...state,
                user : action.payload,
            };
        case types.SET_CAR_PAGINATION: 
            const oldCarState = [...state.cars];
            const newCarState = oldCarState.concat(action.payload);
            return {
                ...state,
                cars : newCarState,
            };
        case types.SET_INDEXPAGE_ADD:
            return {
                ...state,
                indexPage : state.indexPage + 1,
            };
        case types.SET_CAR_INIT : 
            return {
                ...state,
                isCarInit : true,
            };
        case types.SET_CAR_COUNT : 
            return {
                ...state,
                totalCount : action.payload
            };
        case types.SET_CURRENT_COUNT : 
            return {
                ...state,
                currentCount : action.payload
            }
        default : 
        return state;
    }
}

export default reducer;