import React, {Component} from 'react';
import classes from './MainDetail.module.css';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';

class MainDetail extends Component {
    render() {
        return(
            <div className={classes.MainDetail}>
                <h2>Trang chi tiết người dùng</h2>
                <div className={classes.Content}>
                    <p>123</p>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actionCreator.getUserServer()),
    }
}

export default connect()(MainDetail);