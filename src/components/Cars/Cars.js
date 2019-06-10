import React from 'react';
import classes from './Cars.module.css';
import Car from "./Car/Car";
const cars = props => {
    return (
        <div className={classes.Cars}>
            <h2>Có tất cả {props.count} xe trong cửa hàng</h2>
            {props.cars.map(car => {
                return <Car key={car.model} car={car}></Car>
            })}
        </div>
    );
}

export default cars;