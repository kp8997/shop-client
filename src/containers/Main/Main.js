import React, {Component} from 'react';
import axios from '../../axios';
import classes from './Main.module.css';
import Cars from "../../components/Cars/Cars";
import Spinner from "../../components/Spinner/Spinner";

class Main extends Component {
    
    state = {
        cars : null
    }
    
    componentDidMount() {
        if (!this.state.cars) {
            axios.get("/car").then(res => {
                this.setState({cars : res.data});
            }).catch(err => {
                console.log(err);

            });
        }
    }

    render () {
        let cars = <Spinner></Spinner>;
        if (this.state.cars != null)
        {
            cars = <Cars cars={this.state.cars}></Cars>
            console.log(this.state.cars.count);
        }
        return (
            <div className={classes.Main}>
                <h2>Website bán xe cực kỳ uy tín</h2>
                {cars}
            </div>
        );
    }
}

export default Main;