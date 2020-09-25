import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner } from "react-bootstrap";
import StoreCart from "./storeCratd";

class Stores extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            stores : [],
            loading : false,
        }
    }
    componentDidMount(){
        const url = "http://localhost:8000/stores";
        axios.get(url).then(response=>response.data)
        .then((data)=>{
            this.setState({
                stores : data,
                loading : true,
            })
        })
    }
    render(){
        const loading = <Spinner animation="border" role="status"> <span className="sr-only">Loading...</span></Spinner>;
        let   itemList = this.state.stores.map((store=>{
            return(
                <StoreCart stores={store} key={store.storeID}/>
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

export default  Stores;