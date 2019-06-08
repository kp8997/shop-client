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

export const getUserServer = () => {
    return dispatch => {
        axios.get(`/user/${window.localStorage.getItem('idUser')}`).then(res => {
            console.log(res.data.user);
            if(res.data.user) {
                dispatch(setAuthorizationTrue());
                dispatch(setUser(res.data.user));
            }
            console.log ()

        }).catch(err => {
            console.log(err);
        });
    }
}

export const logoutUserServer = (event) => {
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