import React, {Component} from 'react';
import axios from '../../axios';
import classes from './Main.module.css';
import Cars from "../../components/Cars/Cars";
import Spinner from "../../components/Spinner/Spinner";
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';

class Main extends Component {
    
    componentDidMount() {
        // if (!this.state.cars) {
        //     axios.get("/car").then(res => {
        //         this.setState({cars : res.data});
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // } else {
        //     console.log("Can not get cars' data");
        // }

        if(!this.props.isCarInit) {
            this.props.onGetCarPagination(this.props.indexPage);
        }
    }


    loadMoreHandle (event) {
        event.preventDefault();
        this.props.onGetCarPagination(this.props.indexPage);
    }

    render () {
        let cars = <Spinner></Spinner>;
        let loadMore;
        // console.log(this.props.cars);
        if (this.props.cars)
        {
            cars = <Cars cars={this.props.cars} count={this.props.totalCount}></Cars>
            if(!(this.props.currentCount === this.props.totalCount))
            {
                loadMore = <button className={classes.LoadMore} onClick={event => this.loadMoreHandle(event)}>Xem thêm xe ...</button>
            }
        }
        return (
            <div className={classes.Main}>
                <h2>Website bán xe cực kỳ uy tín</h2>
                {cars}
                {loadMore}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        cars : state.cars,
        indexPage : state.indexPage,
        totalCount : state.totalCount,
        currentCount : state.currentCount,
        isCarInit : state.isCarInit,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => dispatch(actionCreator.getUserServer()),
        onGetCarPagination: (indexPage) => dispatch(actionCreator.getCarServerPagination(indexPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);