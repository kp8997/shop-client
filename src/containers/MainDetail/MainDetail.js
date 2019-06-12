import React, {Component} from 'react';
import classes from './MainDetail.module.css';
import {connect} from 'react-redux';
import FormCar from '../../components/FormCar/FormCar';
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
                        <div className={classes.UserContent}>
                            <h3>Thông tin chi tiết</h3>
                        </div>
                        <div className={classes.PostContent}>
                            <h3>Đăng ký bán xe</h3>
                            <FormCar></FormCar>
                        </div>
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