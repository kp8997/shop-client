import React from 'react';
import './App.css';
import Main from './containers/Main/Main';
import Layout from './components/Layout/Layout';
import {Switch, Route} from 'react-router-dom';
import MainLog from './containers/MainLog/MainLog';

function App() {
  return (
    <div className="App">
      <Layout>
      < Switch>
            <Route path="/login" component={MainLog}/>>
            <Route exact path='/' component={Main}/>
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
