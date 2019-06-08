import * as types from './actionTypes';

const initState = {
    isAuth : false,
    user : null,
}

const reducer = (state = initState, action) => {
    switch(action.type)
    {
        case types.SET_AUTH_FALSE:
            return {
                ...state,
                isAuth : false
            }
        case types.SET_AUTH_TRUE: 
            return {
                ...state,
                isAuth : true
        };
        case types.SET_USER:
            return {
                ...state,
                user : action.payload,
            }
        default : 
        return state;
    }
}

export default reducer;