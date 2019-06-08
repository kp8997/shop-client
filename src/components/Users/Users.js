import React, {Component} from 'react';
import classes from "./Users.module.css";
import User from "./User/User";
import Spinner from '../Spinner/Spinner';

const users = (props) => {
    let u = props.users.users;
    let user = <Spinner></Spinner>
    if (u) {
        user = u.map(doc => {
            return <User user={doc} key={doc._id}></User>
        })
    }

    return (<div className={classes.Users}>
        <h2>Có {props.users.count} người đăng ký</h2>
        <div className={classes.WrapUsers}>
            {user}
        </div>
    </div>);
}


export default users;