import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from '../../context/Context';
import Ratting from '../Ratting/Ratting';

const Filter = () => {

    const { productState: { byStock, byFastDelivery, sort, byRating }, productDispatch } = CartState()



    return (
        <div className='filters'>
            <span className='title'>Filter products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={'inline-1'}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: "lowToHigh"
                        })
                    }}
                    checked={sort === "lowToHigh" ? true : false} />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Decending"
                    name="group1"
                    type="radio"
                    id={'inline-2'}
                    onChange={() => {
                        productDispatch({
                            type: 'SORT_BY_PRICE',
                            payload: "HighToLow"
                        })
                    }}
                    checked={sort === "HighToLow" ? true : false} />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Out of Delivery"
                    name="group1"

                    id={'inline-3'}
                    onChange={() =>
                        productDispatch({
                            type: 'FILTER_BY_STOCK'
                        })} checked={byStock} />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery"
                    name="group2"

                    id={'inline-4'}
                    onChange={() =>
                        productDispatch({
                            type: 'FILTER_BY_DELIVERY'
                        })}
                    checked={byFastDelivery} />
            </span>
            <span>
                <label style={{ padingRight: 10 }} >
                    Rating
                </label>
                <Ratting onClick={(i) => productDispatch({ type: 'FILTER_BY_RATING', payload: i + 1 })} rating={byRating} style={{ cursor: "pointer" }} />
            </span>
            <Button variant='light' onClick={() => productDispatch({ type: 'CLEAR_FILTERS' })}>
                Clear Filters
            </Button>


        </div>
    );
};

export default Filter;