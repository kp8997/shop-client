import React from 'react';
import classes from './Navigations.module.css';
import {NavLink} from 'react-router-dom';
import BoxUser from './BoxUser/BoxUser';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';

const navigations = props => {
    let user = <NavLink to={ {pathname : "/login"}}>Đăng nhập</NavLink>
    let out;
    if (props.isAuth) {
            if (props.user) {
                user = <NavLink to={ {pathname : "/detail"}}><BoxUser>Xin chào {props.user.name}</BoxUser></NavLink>
                out = <a onClick={event => props.onLogoutUser(event)}>Đăng xuất</a>
            }
    }
    return (
        <div className={classes.Navigations}>
            {out}
            {user}
            <NavLink to={ {pathname : "/user"}}>Người bán</NavLink>
            <NavLink to={ {pathname : "/"}}>Trang chủ</NavLink>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        user : state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actionCreator.getUserServer()),
        onLogoutUser : (event) => {dispatch(actionCreator.logoutUserServer(event))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(navigations);