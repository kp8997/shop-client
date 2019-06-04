import React from 'react';
import classes from './Navigations.module.css';
import {NavLink} from 'react-router-dom';

const navigations = props => {
    return (
        <div className={classes.Navigations}>
            <NavLink to={ {pathname : "/login"}}>Đăng nhập</NavLink>
        </div>
    );
};

export default navigations;