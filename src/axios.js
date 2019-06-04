import axios from 'axios';

const ins = axios.create({
    baseURL : 'https://obscure-island-44230.herokuapp.com/'
});


export default ins;