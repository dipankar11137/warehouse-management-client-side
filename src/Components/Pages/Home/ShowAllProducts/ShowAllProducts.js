import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Product from '../Product/Product';

const ShowAllProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className='container text-white mt-5 pt-4'>
                <div className='mt-2'>
                    <h1 className='text-center'>SHOW ALL PRODUCTS</h1>
                    <div className='row mt-3 '>
                        {
                            products.map(product => <Product key={product._key} product={product}></Product>)
                        }
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowAllProducts;