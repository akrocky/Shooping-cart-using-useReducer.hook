import React from 'react';
import './Home.css'
import { CartState } from '../../context/Context';
import SingleProduct from '../SingleProdut/SingleProduct';
import Filter from '../Filter/Filter';

const Home = () => {
    const { state: { products }, productState: { sort, byStock, byFastDelivery, byRating, searchQuery } } = CartState();
    const transformProduct = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts.sort((a, b) => (
                sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            ))

        }
        if (!byStock) {
            sortedProducts = sortedProducts.filter(pd => pd.inStock)
        }
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter(pd => pd.fastDelivery)
        }
        if (byRating) {
            sortedProducts = sortedProducts.filter(pd => pd.rating >= byRating)
        }
        if (searchQuery) {
            sortedProducts = sortedProducts.filter(pd => pd.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts;
    }


    return (
        <div className='home'>
            <Filter></Filter>
            <div className='productContainer'>
                {
                    transformProduct()?.map((pd => <SingleProduct product={pd} key={pd.id}>

                    </SingleProduct>


                    ))
                }

            </div>
        </div>
    );
};

export default Home;