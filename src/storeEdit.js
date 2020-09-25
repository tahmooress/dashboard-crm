import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Spinner } from "react-bootstrap";
class StoreEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            storeName: "",
            storeAddress : "",
            phone : "",
            proxy : "",
            mobile : "",
            loading : true,
        }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let id = this.props.match.params.id
        console.log(id)
        const url = "http://localhost:8000/storeEdit"
        let body = JSON.stringify({
            storeName : this.state.storeName,
            storeAddress : this.state.storeAddress,
            phone : this.state.phone,
            proxy : this.state.proxy,
            mobile : this.state.mobile,
            storeID : parseInt(id)
        })
        axios.post(url,body)
    }
    handleChange(e){
        let v = e.target.value;
        this.setState({
            [e.target.id] : v
        })
        
        }
    componentDidMount(){
        let id = this.props.match.params.id
        const url = "http://localhost:8000/singleStore"
        axios.get(url, {
           params : {
               id
           }
        })
        .then(response => response.data)
        .then(data=>this.setState({
            loading : false,
            storeName : data.storeName,
            storeAddress : data.storeAddress,
            phone : data.phone,
            proxy : data.proxy,
            mobile : data.mobile
            
        }))
    }
    render(){
        const loading = <Spinner animation="border" role="status"> <span className="sr-only">Loading...</span></Spinner>;
        
        return(
            <div className="main">
                {this.state.loading ? loading : (
                    <form>
                <label type="text" htmlFor="phone">تلفن
                <input id="phone" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </label>
                <label type="text" htmlFor="storeName">اسم داروخانه
                <input id="storeName" type="text" name="storeName" value={this.state.storeName} onChange={this.handleChange} />
                </label>
                <br></br>
                <label type="text" htmlFor="storeAddress">آدرس
                <input id="storeAddress" type="text" name="storeAddress" value={this.state.storeAddress} onChange={this.handleChange} />
                </label>
                <br></br>
                <label type="text" htmlFor="mobile">موبایل
                <input id="mobile" type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                </label>
                <label type="text" htmlFor="proxy">نماینده
                <input id="proxy" type="text" name="proxy" value={this.state.proxy} onChange={this.handleChange} />
                </label> 
                <button onClick = {this.handleSubmit} className="submit">save</button>
            </form> 
                )}
            </div>
        )
    }
}

export default StoreEdit