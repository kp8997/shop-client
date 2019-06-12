import React from 'react';
import classes from './Cars.module.css';
import Car from "./Car/Car";
import Spinner from '../Spinner/Spinner';

const cars = props => {
    let cars = <Spinner></Spinner>;
    if (props.cars) {
        cars = props.cars.map(car => {
            return <Car key={car.model} car={car}></Car>
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