import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='text-white mt-5'>
            <h1 className='text-center'>This is products</h1>
            <h3>Products : {products.length}</h3>
        </div>
    );
};

export default Products;