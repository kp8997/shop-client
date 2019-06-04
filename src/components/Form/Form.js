import React, {Component} from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import BoxVertical from './BoxVertical/BoxVertical';
import classes from './Form.module.css';
import BoxHorizone from './BoxHorizone/BoxHorizone';

class Form extends Component {
        
    state = {
        isAccount : true,
    }

    changeStatusHandler = () => {
        this.setState({isAccount : !this.state.isAccount, });
    }

    render() {
        return(
            <div className={classes.Form}>
                <BoxHorizone isAccount={this.state.isAccount} click={this.changeStatusHandler}></BoxHorizone>
                <BoxVertical isAccount={this.state.isAccount} ></BoxVertical>
            </div>
        );
    }

}

export default Form