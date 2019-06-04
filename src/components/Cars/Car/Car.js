import React, {Component} from 'react';
import classes from './Car.module.css';
import firebase from '../../../Firebase';
import Spinner from '../../Spinner/Spinner';

class Car extends Component {

    state = {
        image : [],
    }
    
    componentDidMount() {
        const images = firebase.storage().ref().child('images');
        const image = images
        .child(`${this.props.car.imagesFilename}`)
        .getDownloadURL()
        .then(url => {
            let newImage = [...this.state.image, url];
            this.setState({image : newImage});
        });     // file name is image1
        //image.on('value', (url) => this.setState({ img: url.val() }));
    }
    
    render() {
        let image = <Spinner></Spinner>
        if(this.state.image) {
            image = <img src={this.state.image[0]} alt="car"></img>
        }
        return (
            <div className={classes.Car}>
                {image}
                <div className={classes.Properties}>
                    <h4>{this.props.car.title}</h4>
                    <div className={classes.Element1}>
                        <p><span><strong>Dòng xe : </strong> {this.props.car.brand}</span></p>
                        <p><span><strong>Năm sản xuất :</strong> {this.props.car.year}</span></p>
                        <p><span><strong>Giá bán : </strong> ${this.props.car.price} </span></p>
                    </div>
                    <div className={classes.Element2}>
                        <p><span><strong>Mã xe : </strong>{this.props.car.model}</span></p>
                        <p><span><strong>Màu sắc : </strong>{this.props.car.color}</span></p>
                        <p><span><strong>Hộp số : </strong>{this.props.car.gear}</span></p>
                    </div>
                </div>
                <div className={classes.Function}>
                    <a href="/">Người bán</a>
                </div>               
            </div>
        );
    }

}

export default Car;