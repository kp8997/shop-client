import axios from 'axios';

// const token = window.sessionStorage.getItem('secret');
//
const ins = axios.create({
    baseURL: 'https://obscure-island-44230.herokuapp.com/',
    // baseURL : "http://localhost:9999",
    // headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/x-www-form-urlencoded',
    // },

    // headers : {
    //     "Authorization" : token,
    // }
});

ins.interceptors.request.use((config ) =>  {
  // Do something before request is sent
  config.headers.Authorization = 'Bearer ' + window.localStorage.getItem("secret");
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// ins.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('secret');

export default ins;