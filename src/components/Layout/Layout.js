import React, {Component} from 'react';
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actionCreator';

class Layout extends Component {
    componentDidMount() {
        this.props.onGetUser();
    }

    render() {
        console.log(`IN LAYOUT ${this.props.isAuth}`);
        return(
            <div className={classes.Layout}>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
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
      onGetUser : () => dispatch(actionCreator.getUserServer()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Layout);