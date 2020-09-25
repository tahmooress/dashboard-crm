import React from "react";
import {Card } from "react-bootstrap";

class StoreCart extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cartContainer">
                 <Card>
                    <Card.Body>
                        <Card.Title>{this.props.stores.storeName}</Card.Title>
                        <div><span>:آدرس</span></div>
                        <div><span>{this.props.stores.storeAddress}</span></div>
                        <div><span>:شماره تلفن</span></div>
                        <div><span>{this.props.stores.phone}</span></div>
                        <table>
                            <tr>
                                <th>:موبایل</th>
                                <th>:شخص مرتبط</th>
                            </tr>
                            <tr>
                                <td>{this.props.stores.mobile}</td> 
                                <td>{this.props.stores.proxy}</td>
                            </tr>
                        </table>
                        <Card.Link href={`/transactions/store/` + this.props.stores.storeID} >تراکنش‌ها</Card.Link>
                        <Card.Link href={`/store-edit/` + this.props.stores.storeID} id="edit">ویرایش</Card.Link>
                    </Card.Body>
                </Card>
            </div>
               
        )
    }
}
export default StoreCart;