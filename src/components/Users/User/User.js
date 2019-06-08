import React from 'react';
import classes from './User.module.css';

const user = props => {
    return(
        <div className={classes.User}>            
            <p>{props.user.name}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.email}</p>
        </div>
    );
}

export default user;