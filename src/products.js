import React from "react";
import ProductCard from "./productCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner } from "react-bootstrap";
class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products : [],
            loading : false,
        }
    }
    componentDidMount(){
        const url = "http://localhost:8000/products";
        axios.get(url).then(response=>response.data)
        .then((data)=>{
            this.setState({
                products : data,
                loading : true,
            })
        })
    }
    render(){
        const loading = <Spinner animation="border" role="status"> <span className="sr-only">Loading...</span></Spinner>;
        let itemList = this.state.products.map((product=>{
            return(
                <ProductCard product={product} key={product.id}/>
            )
        }))
        return(
            <div className="main">
                <div className="cartRow">
                    {this.state.loading ? itemList : loading}
                </div>
            </div>
            
        )
    }
}
export default Products;