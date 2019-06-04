import React from 'react';
import classes from './BoxVertical.module.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

const box = props => {
    let style = classes.Trans;
    let content = <Login/>;
    if (props.isAccount) {
        style = classes.Trans;
        content = <Login/>;
    }  else { 
        style = classes.BoxVertical;
        content = <Register />;
    }
    return (
        <div className={style}>
            {content}
        </div>
    );
}



export default box;