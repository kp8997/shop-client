import React, {Component} from 'react';
import classes from './Login.module.css';
import axios from '../../../axios';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreator from '../../../store/actionCreator';
import {  
    ToastConsumer,
    ToastProvider,
    withToastManager,} from "react-toast-notifications";



class Login extends Component {

    state = {
        formConfig : {
            email : {
                name : "email",
                value : ""
            },
            pass : {
                name : "pass",
                value : ""
            }
        },
    }

    handleSubmit = (event) => {
        event.preventDefault();
        window.localStorage.setItem('secret', "");
        window.localStorage.setItem('idUser', "");
        axios.post("/user/login", {
            email : this.state.formConfig.email.value,
            password : this.state.formConfig.pass.value,
        }).then(res => {
            console.log(res.status);
            console.log(res);
            window.localStorage.setItem('secret', res.data.user.token);
            window.localStorage.setItem('idUser', res.data.user.id);
            this.props.onSetAuth();
            this.props.onGetUser();
        }).catch(err => {
            console.log(err);
            alert("Đăng nhập không thành công");
        });    
    }

    inputHandler = (event, formConfigName) => {
        let newFormConfig  = {...this.state.formConfig};
        let newConfig = {...this.state.formConfig[formConfigName]};
        newConfig.value = event.target.value;
        newFormConfig[formConfigName] = newConfig;
        this.setState({ formConfig : newFormConfig});
    }

    render () {
        let redirect = (<form className={classes.Login}>
            <h3>Login</h3>
            <input type="text" name="email" onChange={event => this.inputHandler(event, "email")} placeholder="Email"/>
            <input type="password" name="pass" onChange={event => this.inputHandler(event, "pass")} placeholder="Password"/>
            <button onClick={event => this.handleSubmit(event)}>Login</button>
            <a href="/">Forget Password?</a>
        </form>);
        if (this.state.isAuth) {
            redirect = <Redirect to={{pathname : "/detail"}}></Redirect>
        }

        return (
            redirect
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth : state.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAuth : () => dispatch(actionCreator.setAuthorizationTrue()),
        onGetUser : () => dispatch(actionCreator.getUserServer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);