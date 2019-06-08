import React, {Component} from 'react';
import classes from './MainDetail.module.css';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import {Redirect} from 'react-router-dom';

class MainDetail extends Component {
    render() {
        let component = <Redirect to={{pathname : "/"}}/>          
        if(this.props.isAuth) {
            component =             
                <div className={classes.MainDetail}>
                    <h2>Trang chi tiết người dùng</h2>
                    <div className={classes.Content}>
                        <p>123</p>
                    </div>
                </div>
        }
        return component;
    };
}

const mapStateToProps = state => {
    return {
        isAuth : state.isAuth,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actionCreator.getUserServer()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDetail);