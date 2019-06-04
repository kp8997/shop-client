import React from 'react';
import classes from './Header.module.css';
import {Route, NavLink} from 'react-router-dom';
import Navigations from "../Navigations/Navigations";

const header = props => {
    return (
    <div className={classes.Header}>
        <NavLink to={{pathname : "/"}}><div className={classes.Logo}>Car4U</div></NavLink>
        <Navigations></Navigations>
    </div>);
}

export default header;