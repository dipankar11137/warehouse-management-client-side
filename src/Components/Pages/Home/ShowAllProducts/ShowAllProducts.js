import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const ShowAllProducts = () => {
    const [products] = useProducts();
    return (
        <div className='text-white mt-5 pt-4'>
            <div className='mt-2'>
                <h1 className='text-center'>SHOW ALL PRODUCTS</h1>
                <div className='row mt-3 '>
                    {
                        products.map(product => <Product key={product._key} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ShowAllProducts;