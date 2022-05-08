import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Product from '../Product/Product';
const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const email = user.email;
            const url = `https://enigmatic-fjord-48506.herokuapp.com/products?email${email}`;
            const { data } = await axios.get(url);
            setProducts(data)
        }
        getProducts();

    }, [user])

    return (
        <div className='mt-5 pt-5 text-white container'>
            <h1 className='text-center fw-bold'>My Products {products.length}</h1>
            <div className='row mt-5 '>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default MyProducts;