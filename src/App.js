import React from 'react';
import './App.css';
import Main from './containers/Main/Main';
import Layout from './components/Layout/Layout';
import {Switch, Route} from 'react-router-dom';
import MainLog from './containers/MainLog/MainLog';
import MainUser from './containers/MainUser/MainUser';
import MainDetail from './containers/MainDetail/MainDetail';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';

function App(props) {
  // props.onGetUser();
  // let routeLog = <Route path="/login" component={MainLog}/>
  // if (props.isAuth) {
  //   routeLog = <Route path="/login" component={Main}/>
  // }
  return (
    <div className="App">
      <Layout>
      < Switch>
            <Route path="/detail" component={MainDetail}/>
            <Route path="/login" component={MainLog}/>
            <Route path="/user" component={MainUser}/>
            <Route exact path='/' component={Main}/>
        </Switch> 
      </Layout>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
