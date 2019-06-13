import React, {Component} from 'react';
import classes from './Register.module.css';
import axios from "../../../axios";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreator from '../../../store/actionCreator';

class Register extends Component {

    state = {
        formConfig : {
            email : {
                name : "email",
                value : ""
            },
            pass : {
                name : "pass",
                value : ""
            },
            phone : {
                name : "phone",
                value : "",
            },
            name : {
                name : "name",
                value : "",
            },
            conf : {
                name : "conf",
                value : "",
            }
        },
        isValidConfirm : false,
    }

    checkPassword() {
        if(this.state.formConfig.pass.value === this.state.formConfig.conf.value)
        {
            this.setState({isValidConfirm : true});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.formConfig.pass.value === this.state.formConfig.conf.value) {
            window.localStorage.setItem('secret', "");
            window.localStorage.setItem('idUser', "");
            axios.post("/user/register", {
                email : this.state.formConfig.email.value,
                password : this.state.formConfig.pass.value,
                phone : this.state.formConfig.phone.value,
                name : this.state.formConfig.name.value,
            }).then(res => {
                console.log(res);
                window.localStorage.setItem('secret', res.data.token);
                window.localStorage.setItem('idUser', res.data.id);
                this.props.onSetAuth();
                this.props.onGetUser();
                alert("Đăng ký thành công");
                console.log(this.props.isAuth);
            }).catch(err => {
                console.log(err);
                alert("Đăng ký không thành công");
            });
        } else {
            console.log("IT NOT VALID PASSWOD and CONFIRM PASSWORD MUST BE THE SAME");
        }        
    }

    inputHandler = (event, formConfigName) => {
        let newFormConfig  = {...this.state.formConfig};
        let newConfig = {...this.state.formConfig[formConfigName]};
        newConfig.value = event.target.value;
        newFormConfig[formConfigName] = newConfig;
        this.setState({ formConfig : newFormConfig});
    }
    render () {
        let redirect = (<form className={classes.Register}  encType="application/x-www-form-urlencoded" method="POST">
        <h3>Sign Up</h3>
        <input id="email" name="email" type="text" onChange={(event) => this.inputHandler(event, "email")} placeholder="Email"/>
        <input id="pass" name="pass" type="password" onChange={(event) => this.inputHandler(event, "pass")} placeholder="Password"/>
        <input id="confpass" name="conf" type="password" onChange={(event) => this.inputHandler(event, "conf")} placeholder="Confirm Password"/> 
        <input id="phone" name="phone" type="text" onChange={(event) => this.inputHandler(event, "phone")} placeholder="Phone number"/>
        <input id="name" name="name" type="text" onChange={(event) => this.inputHandler(event, "name")} placeholder="Name"/>
        <button onClick={(event) => this.handleSubmit(event)}>Register</button>
    </form>);
        if (this.props.isAuth) {
            redirect = <Redirect to={{pathname : "/detail"}}></Redirect>
        }

        return (
            redirect
            // <div class={classes.RegisterShow}>

            // </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);