import React from "react";
import {Card } from "react-bootstrap";

class ProductCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cartContainer">
                 <Card>
                    <Card.Body>
                        <Card.Title>{this.props.product.productName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.product.productID}#</Card.Subtitle>
                        <table>
                            <tr>
                                <th>قیمت</th>
                                <th>برند</th>
                            </tr>
                            <tr>
                                <td>{this.props.product.price}</td>
                                <td>{this.props.product.productBrand}</td>
                            </tr>
                        </table>
                    </Card.Body>
                </Card>
            </div>
               
        )
    }
}
export default ProductCard;