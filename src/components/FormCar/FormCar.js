import React, {Component} from 'react';
import classes from './FormCar.module.css';
import iconUpload from '../../assets/icon-upload2.png';
import axios from '../../axios';
import Car from '../Cars/Car/Car';
import Auxiliary from '../../hocs/Auxiliary/Auxiliary';

class FormCar extends Component {

    state = {
        formConfig : {
            brand : {
                name : "brand",
                value : ""
            },
            origin : {
                name : "origin",
                value : ""
            },
            year : {
                name : "year",
                value : "",
            },
            model : {
                name : "model",
                value : "",
            },
            color : {
                name : "color",
                value : "",
            },
            gear : {
                name : "gear",
                value : "",
            },
            price : {
                name : "price",
                value : ""
            },
            title : {
                name : "title",
                value : ""
            },
            images : {
                name : "images",
                value : null,
                fileName : ""
            }
        },
        isValidConfirm : false,
    }

    handleSubmit(event) {
        event.preventDefault();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const formData = new FormData();
        formData.append("brand", this.state.formConfig.brand.value);
        formData.append("origin", this.state.formConfig.origin.value);
        formData.append("year", this.state.formConfig.year.value);
        formData.append("model", this.state.formConfig.model.value);
        formData.append("color", this.state.formConfig.color.value);
        formData.append("gear", this.state.formConfig.gear.value);
        formData.append("price", this.state.formConfig.price.value);
        formData.append("title", this.state.formConfig.title.value);
        formData.append("images", this.state.formConfig.images.value);
        axios.post("/car", formData, config).then(res => {
            console.log(res);
            alert("Đăng bài thành công");
        }).catch(err => {
            console.log(`Error ${err} in FORM Car`);
            alert("Đăng bài không thành công");
        })
    }

    inputHandler = (event, formConfigName) => {
        let newFormConfig  = {...this.state.formConfig};
        let newConfig = {...this.state.formConfig[formConfigName]};
        if (formConfigName === "images") {
            newConfig.value = event.target.files[0];
            newConfig.fileName = event.target.files[0].name;
        } else {
            newConfig.value = event.target.value;
        }
        newFormConfig[formConfigName] = newConfig;
        this.setState({ formConfig : newFormConfig});
    }

    render () {
        const iStyle = {
            backgroundImage : "url(" + iconUpload +")",
            width : "20px",
            height : "20px",
            display : "inline-block",
            backgroundPosition: "center",
            backgroundSize: "cover",
            verticalAlign: "bottom"
        };       
        let fileName = null;
        if (this.state.formConfig.images.fileName){
            fileName = <Auxiliary>
                <label className={classes.Label} htmlFor="brand">Tên tệp</label>
                <span className={classes.FileName}>{this.state.formConfig.images.fileName}</span>
            </Auxiliary>;
        }

        return (
            <form className={classes.FormCar}>
                <label className={classes.Label} htmlFor="brand">Nhãn hiệu</label>
                <input id="brand" name="brand" type="text" placeholder="Tên hãng xe" onChange={event => this.inputHandler(event, "brand")}></input><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="origin" >Xuất xứ</label>                
                <input id="origin" name="origin" type="text" placeholder="Xuất xứ" onChange={event => this.inputHandler(event, "origin")}></input><span className={classes.Span}>*</span>
                {/* <input name="year" type="text" placeholder="Đời xe" onChange={event => this.inputHandler(event, "year")}></input><span>*</span> */}
                <label className={classes.Label} htmlFor="option">Đời xe</label>
                <select onChange={event => this.inputHandler(event, "year")} id="option" name="year">
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                </select><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="model" >Dòng xe</label>
                <input id="model" name="model" type="text" placeholder="Dòng xe" onChange={event => this.inputHandler(event, "model")}></input><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="color">Màu sắc</label>
                <input id="color" name="color" type="text" placeholder="Màu sắc" onChange={event => this.inputHandler(event, "color")}></input><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="gear">Hộp số</label>
                <input id="gear" name="gear" type="text" placeholder="Hộp số" onChange={event => this.inputHandler(event, "gear")}></input><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="price" >Giá cả</label>
                <input id="price" name="price" type="text" placeholder="Giá" onChange={event => this.inputHandler(event, "price")}></input><span className={classes.Span}>*</span>
                <label className={classes.Label} htmlFor="title" >Tiêu đề bài đăng</label>
                <input id="title" name="title" type="text" placeholder="Tiêu đề bài đăng" onChange={event => this.inputHandler(event, "title")}></input><span className={classes.Span}>*</span>
                <button onClick={event => this.handleSubmit(event)}>Gửi</button>                
                <label name="images" className={classes.Upload}>
                    <input type="file" onChange={event => this.inputHandler(event, "images")}/>
                    <i style={iStyle}>
                        </i> 
                        Upload Ảnh
                </label>
                {fileName}
            </form>
        );
    }
}

export default FormCar;