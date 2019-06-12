import * as types from './actionTypes';
import axios from '../axios';

export const setAuthorizationTrue = () => {
    return {
        type : types.SET_AUTH_TRUE,
    }
}

export const setAuthorizationFalse = () => {
    return {
        type : types.SET_AUTH_FALSE,
    }
}


export const setUser = (user) => {
    return {
        type : types.SET_USER,
        payload : user
    }
}

export const setCarPagination = (cars) => {
    return {
        type : types.SET_CAR_PAGINATION,
        payload : cars
    };
}

export const setIndexPage = () => {
    return {
        type : types.SET_INDEXPAGE_ADD,
    };
}

export const setCarCount = count => {
    return {
        type : types.SET_CAR_COUNT,
        payload : count
    };
}

export const setCurrentCount = (value) => {
    return {
        type : types.SET_CURRENT_COUNT,
        payload : value
    }
}

export const setCarInit = () => {
    return {
        type : types.SET_CAR_INIT
    }
}

export const getCarServerPagination = (indexPage) => {
    return dispatch => {
        axios.get(`/car/${indexPage}`).then(res => {
            const cars = res.data.cars;
            const totalCount = res.data.count;
            const currentCount = 2 * indexPage + cars.length;
            console.log(`Current Count ${currentCount}`);
            if(cars) {
                dispatch(setCarInit());
                dispatch(setCarPagination(cars));
                dispatch(setIndexPage());
                dispatch(setCarCount(totalCount));
                dispatch(setCurrentCount(currentCount))
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getUserServer = () => {
    return dispatch => {
        axios.get(`/user/${window.localStorage.getItem('idUser')}`).then(res => {
            console.log(res.data.user);
            if(res.data.user) {
                dispatch(setAuthorizationTrue());
                dispatch(setUser(res.data.user));
            }
        }).catch(err => {
            console.log(err);
        });
    }
}

export const logoutUserServer = event => {
    event.preventDefault();
    return dispatch => {
        axios.delete("/user/logout").then(res => {
            console.log(res.data.message);
            dispatch(setAuthorizationFalse());
            window.localStorage.setItem("secret", "");
            window.localStorage.setItem("idUser", "");
        }).catch(err =>{
            console.log(err);
        });
    }
}

export const postCarSer = event => {
    event.preventDefault();
}