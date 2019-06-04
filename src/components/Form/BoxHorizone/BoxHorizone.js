import React from 'react';
import classes from './BoxHorizone.module.css';

const box = props => { 

    let style;
    let header = "Don't Have Account?";
    let button = "Register"
    if (props.isAccount) {
        style = classes.Trans;

        header = "Don't Have Account?";
        button = "Register"
    } else {
        style = classes.MiniBox;
        header = "Have Account?";
        button = "Login";
    }

    return (
        <div className={classes.BoxHorizone}>
            <div className={style}>
                <h3>{header}</h3>
                <button className={classes.Button} onClick={props.click}>{button}</button>
            </div>
        </div>
    );
}



export default box;