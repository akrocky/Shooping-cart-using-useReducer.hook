import React from 'react';
import './Header.css'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa'
import { CartState } from '../../context/Context';
import { Link } from 'react-router-dom';

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState()
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        Shopping Cart

                    </a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl onChange={e => productDispatch({ type: 'FILTER_BY_SEARCH', payload: e.target.value })} style={{ width: 500 }} placeholder='seacrh a product' className='m-auto' />

                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant='success' >
                            <FaShoppingCart color='white' fontSize='25px' />
                            <Badge bg="secondary">
                                {cart.length}
                            </Badge>

                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map(pd => <span className='cartItem' key={pd.id}>
                                            <img src={pd?.image} className='cartItemImg' alt={pd.name} />
                                            <div className='cartItemDetil'>
                                                <span>{pd.name}</span>
                                                <span>$ {pd?.price.split(".")[0]} </span>

                                            </div>

                                            <AiFillDelete
                                                fontSize='20px'
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: pd
                                                    })}
                                            />

                                        </span>)
                                    }
                                    <Link to='/cart'>
                                        <Button style={{ width: '95%', margin: '0 10px' }}>
                                            Go to Cart
                                        </Button></Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>
                                Cart is Empty
                            </span>)}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;