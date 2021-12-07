import React, { useEffect, useState } from 'react';
import './Cart.css';

import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { CartState } from '../../context/Context';
import Ratting from '../Ratting/Ratting';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
    const { state: { cart }, dispatch } = CartState()
    const [total, setTotal] = useState()
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {
                        cart.map(pd => (
                            <ListGroup.Item key={pd.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={pd.image} alt={pd.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>
                                        <span>
                                            {pd.name}
                                        </span>

                                    </Col>
                                    <Col md={2}>
                                        <span>
                                            {pd.price}
                                        </span>
                                    </Col>
                                    <Col md={2}>
                                        <Ratting rating={pd.ratings} />
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={pd.qty}
                                            onChange={e => dispatch({
                                                type: 'CANGE_CART_QTY',
                                                payload: {
                                                    id: pd.id,
                                                    qty: e.target.value,
                                                }
                                            })}>
                                            {
                                                [...Array(pd.inStock).keys()].map(x => (
                                                    <option key={x + 1}>{x + 1}</option>
                                                ))
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: pd
                                            })}>
                                            <AiFillDelete
                                                fontSize='20px'
                                                style={{ cursor: "pointer" }}

                                            />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>

            </div>
            <div className='filters  summary'>
                <span className='title'>Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total $ {total}</span>
                <Button type="button" disabled={cart.length === 0}>
                    proceed to Checkout
                </Button>

            </div>
        </div>
    );
};

export default Cart;