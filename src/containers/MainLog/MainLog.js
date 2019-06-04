import React, {Component} from 'react';
import axios from '../../axios';
import classes from './MainLog.module.css';
import Cars from "../../components/Cars/Cars";
import Spinner from "../../components/Spinner/Spinner";
import Form from '../../components/Form/Form';

class MainLog extends Component { 
    render() {
        return(
            <div className={classes.MainLog}>
                <Form></Form>
            </div>
        );
    }
}

export default MainLog