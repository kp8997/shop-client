import React, {Component} from 'react';
import classes from './MainUser.module.css';
import Users from '../../components/Users/Users';
import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';

class MainUser extends Component {
    state = {
        users : null
    }

    componentDidMount() {
        if (!this.state.users) {
            axios.get("/user").then(res => {           
                this.setState({users : res.data});
            }).catch(err => console.log(err));
        } else {
            console.log("Can not get users' data")
        }
    }

    render() {
        let users = <Spinner></Spinner>;
        if(this.state.users) {
            users = <Users users={this.state.users}></Users>
        }
        return(<div className={classes.MainUser}>
            <h2>Trang người dùng</h2>
            {users}
        </div>
        )};   
}

export default MainUser;