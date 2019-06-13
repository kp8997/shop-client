import React from 'react';
import classes from './Cars.module.css';
import Car from "./Car/Car";
import Spinner from '../Spinner/Spinner';

const cars = props => {
    let c = props.cars;
    let cars = <Spinner></Spinner>;
    if (c) {
        cars = props.cars.map(car => {
            return <Car key={car.id} car={car}></Car>
        });
    }
    return (
        <div className={classes.Cars}>
            <h2>Có tất cả {props.count} xe trong cửa hàng</h2>
            {cars}
        </div>
    );
}

export default cars;