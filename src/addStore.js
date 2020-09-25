import React  from 'react';
import axios from "axios"
class AddStore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            storeName:"",
            storeAddress: "",
            phone: "",
            proxy: "",
            mobile: "",
        }
     this.changeHandler = this.changeHandler.bind(this); 
     this.submitHandler = this.submitHandler.bind(this);  
    }
    changeHandler(e){
        let v = e.target.value;
        this.setState({
            [e.target.id] : v
        })
        console.log(this.state)
    }
    submitHandler(e){
        e.preventDefault();
        const url = "http://localhost:8000/addStore";
        let body = JSON.stringify(this.state)
       axios.post(url, body)
       .then(res=> alert(res.data.result + res.data.er))

    }
    render() {
        return (
            <div className="main">
                <form>
                    <label type="text" htmlFor="storeName">:نام داروخانه</label><br></br>
                    <input id="storeName" type="text"  placeholder="نام داروخانه" onChange={this.changeHandler}/><br></br>
                    <label type="text" htmlFor="storeAddress">:آدرس</label><br></br>
                    <input placeholder="...شهرک اکباتان- فاز یک" id="storeAddress" onChange={this.changeHandler} type="text"/><br></br>
                    <label htmlFor="phone" type="text">:تلفن</label><br></br>
                    <input placeholder="تلفن" id="phone" onChange={this.changeHandler} type="text"/><br></br>
                    <label htmlFor="proxy" type="text">:نماینده</label><br></br>
                    <input placeholder="دکتر عباسی" id="proxy" onChange={this.changeHandler} type="text"/><br></br>
                    <label htmlFor="mobile" type="text">:موبایل</label><br></br>
                    <input placeholder="موبایل" id="mobile" onChange={this.changeHandler} type="text"/><br></br>
                    <button onClick={this.submitHandler} className="submit">تایید</button>
                    
                </form>
            </div>
        )
    }
}
export default AddStore;