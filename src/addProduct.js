import React from "react";
import axios from "axios";


class AddProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productName: "",
            productBrand : "",
            productID : 0,
            price : 0
        }
     this.changeHandler = this.changeHandler.bind(this);
     this.submitHandler = this.submitHandler.bind(this);   
    }
    changeHandler(e){
        let v = e.target.value;
        if ( e.target.id === "price" || e.target.id === "productID")
        v = parseInt(v);
        this.setState({
            [e.target.id] : v,
        })
    }
    submitHandler(e){
        e.preventDefault();
        const url = "http://localhost:8000/addProduct";
        let body = JSON.stringify(this.state)
        console.log(body)
       axios.post(url, body)
       .then(res=> alert(res.data))
    }
    render() {
        return (
            <div className="main">
                <form>
                    <label type="text" htmlFor="productName">:نام محصول</label><br></br>
                    <input id="productName" type="text"  placeholder="استامینوفن کدئین" onChange={this.changeHandler}/><br></br>
                    <label type="text" htmlFor="productBrand">:برند محصول</label><br></br>
                    <input placeholder="فارابی" id="productBrand" onChange={this.changeHandler} type="text"/><br></br>
                    <label htmlFor="productID" type="number">:شماره شناسه محصول</label><br></br>
                    <input placeholder="11234" id="productID" onChange={this.changeHandler} type="number"/><br></br>
                    <label htmlFor="price" type="number">:قیمت واحد</label><br></br>
                    <input placeholder="ریال 120.000" id="price" onChange={this.changeHandler} type="number"/><br></br>
                    <button onClick={this.submitHandler} className="submit">تایید</button>
                </form>
            </div>
        )
    }
}

export default AddProduct;