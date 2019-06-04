import React, {Component} from 'react';
import classes from './Login.module.css'

class Login extends Component {
    render () {
        return (
            <div className={classes.Login}>
                <h3>Login</h3>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <a href="">Forget Password?</a>
            </div>
        );
    }
}

export default Login;