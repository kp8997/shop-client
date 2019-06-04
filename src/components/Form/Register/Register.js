import React, {Component} from 'react';
import classes from './Register.module.css';
import axios from "../../../axios";

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
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post({
        //     method: 'post',
        //     url: '/user',
        //     data: {
        //         email : this.state.formConfig.email.value,
        //         pass : this.state.formConfig.pass.value,
        //         phone : this.state.formConfig.phone.value,
        //         name : this.state.formConfig.name.value,
        //     }   
        // });
        axios.post("/user", JSON.stringify({
            email : this.state.formConfig.email.value,
            pass : this.state.formConfig.pass.value,
            phone : this.state.formConfig.phone.value,
            name : this.state.formConfig.name.value,
        })).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
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
        return (
            <form className={classes.Register} onSubmit={(event) => this.handleSubmit(event)}>
                <h3>Sign Up</h3>
                <input id="email" name="email" type="text" onChange={(event) => this.inputHandler(event, "email")} placeholder="Email"/>
                <input id="pass" name="pass" type="password" onChange={(event) => this.inputHandler(event, "pass")} placeholder="Password"/>
                {/* <input id="confpass" name="confpass" type="password" placeholder="Confirm Password"/> */}
                <input id="phone" name="phone" type="text" onChange={(event) => this.inputHandler(event, "phone")} placeholder="Phone number"/>
                <input id="name" name="name" type="text" onChange={(event) => this.inputHandler(event, "name")} placeholder="Name"/>
                <button>Register</button>
            </form>
            // <div class={classes.RegisterShow}>

            // </div>
        );
    }
}

export default Register;