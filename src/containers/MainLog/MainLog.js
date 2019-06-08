import React, {Component} from 'react';
import axios from '../../axios';
import classes from './MainLog.module.css';
import Cars from "../../components/Cars/Cars";
import Spinner from "../../components/Spinner/Spinner";
import Form from '../../components/Form/Form';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import {Redirect} from 'react-router-dom'

class MainLog extends Component { 



    render() {
        // const localToken = window.localStorage.getItem("secret");
        let component = 
        <div className={classes.MainLog}>
            <h2>Đăng nhập - Đăng ký</h2>
            <Form></Form>
        </div>
        if(this.props.isAuth) {
            component = <Redirect to={{pathname : "/"}}></Redirect>
        }
        return (component);
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actionCreator.getUserServer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLog);