import React from "react";
import axios from "axios";
import {Form, Col} from "react-bootstrap";
import Factor from "./factor";

class Transactions extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productList : [],
            tableIndex : [0],
            factor : [{
                quantity : 0,
                productID: "",
            }],
            recieveFactors : [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let id = parseInt(this.props.match.params.id);
        const url = "http://localhost:8000/addTrans";
        let body = JSON.stringify(this.state.factor)
        axios.post(url, body, {
            params : {
                id
            }
         }).then(response=>response.data).then(data=>alert(data))
    }
    handleChange(e){
        e.preventDefault()
        let row = e.currentTarget.parentElement.parentElement.lastChild.innerHTML
        let obj = this.state.factor;
        switch (e.target.tagName) {
            case "SELECT":
                obj[row-1].productID = parseInt(e.target.value);
                break
            case "INPUT":
                obj[row-1].quantity = parseInt(e.target.value);
                break    
        }
        this.setState({
            factor : obj,
        })
    }
    handlePlus(e){
        let nt = this.state.tableIndex;
        let pf = this.state.factor;
        let obj = {
            quantity : 0,
            productID : ""
        }
        nt.push(0)
        pf.push(obj)
        this.setState({
            factore : pf,
            tableIndex : nt,
        })
    }
    componentDidMount(){
        const url = "http://localhost:8000/products"
        axios.get(url).then(response=>response.data).then(data=>{
            this.setState({
                productList : data
            })
        })
        const endpoint = "http://localhost:8000/factors";
        let id = parseInt(this.props.match.params.id);
        axios.get(endpoint, {
            params : {
                id
            }
        }).then(response => response.data)
        .then(data=>{
            this.setState({
                recieveFactors : data
            })
        })
        
    }
    render(){
        let total=0;
        let cards = this.state.recieveFactors.map((factor, index)=>{
            console.log(factor)
            return (
                <Factor trans={factor} list={this.state.productList} key={index} />
            )
        })
         this.state.factor.map(f=>{
           let p = this.state.productList.filter(product=>{
                return f.productID == product.productID
            })
            if(p.length > 0) {
                total += p[0].price * f.quantity
            }
        })
        const myStyle = {
            border : "none",
            textAlign : "center"
        }
        let options = this.state.productList.map(product=>{
            return(
                <option key={product.productID} value={product.productID} >#{product.productID} {product.productName} {product.productBrand} {product.price} ریال</option>
            )
        })
        let tableRange = this.state.tableIndex.map((v,index)=>{
            return(
                    <tr key={index}>
                        <td><input type="number" className="numberInput" value={this.state.factor[index].quantity} onChange={this.handleChange} style={myStyle}/></td>
                        <td>
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref"  onChange={this.handleChange}  custom> 
                                {options}
                            </Form.Control>                                   
                        </td>
                        <td>{index + 1}</td>
                    </tr>    
            )
        })
        return(
            <div className="main">
                <div id="trans">
                    <table>
                        <thead>
                            <tr>
                                <th>تعداد</th>
                                <th>محصول</th>
                                <th>ردیف</th>
                            </tr>
                        </thead>    
                        <tbody>
                                {tableRange}
                        </tbody>
                    </table>
                </div>
                <div className="plust-container">
                    <div className="plus radius" onClick={this.handlePlus}>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Label>جمع کل</Form.Label>
                                <Form.Control value={total} />
                            </Col>
                            <Col>
                                <Form.Label>تاریخ</Form.Label>
                                <Form.Control placeholder="1371/02/23" />
                            </Col>
                        </Form.Row>
                        <button className="submit" onClick={this.handleSubmit}>افزودن فاکتور</button>
                    </Form>
                </div>
                <div className="factors">
                     {cards}
                </div>
            </div>
        )
    }
}

export default Transactions;