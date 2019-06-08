import React from "react";
import classes from './BoxUser.module.css';

const boxUser = props => {
    return <div className={classes.BoxUser}>
        {props.children}
        
    </div>
}

export default boxUser;