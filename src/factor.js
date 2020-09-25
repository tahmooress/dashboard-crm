import React from "react";
import {Card, Form, Col } from "react-bootstrap";


class Factor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        let i =1;
        let rows = this.props.trans.factors.map(factor=>{
            let product = this.props.product.list.filter(p=>{
                p.productID === factor.productID
            })
            return(
                <tr key={factor.productID}>
                    <td>{factor.quantity}</td>
                    <td>{factor.productID}</td>
                    <td>{i++}</td>
                </tr>
            )
        })
        return(
            <div className="factor-cart">
                 <Card>
                    <Card.Body>
                        <Card.Title>{this.props.trans.date}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.trans.transID}#</Card.Subtitle>
                        <table>
                        <thead>
                            <tr>
                                <th>تعداد</th>
                                <th>محصول</th>
                                <th>ردیف</th>
                            </tr>
                        </thead>
                            <tbody>
                                {rows}
                            </tbody> 
                        </table>
                        <div>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>جمع کل</Form.Label>
                                        <Form.Control value="123" />
                                    </Col>    
                                </Form.Row> 
                            </Form>
                </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Factor;