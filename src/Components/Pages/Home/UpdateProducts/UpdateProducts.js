import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
    const { updateproductsId } = useParams();
    const [product, setProduct] = useState({});
    console.log(updateproductsId);
    useEffect(() => {
        const uri = `http://localhost:5000/updateproducts/${updateproductsId}`;
        console.log(uri)
        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className='mt-5 pt-5 text-white'>

            <h1>Update Products</h1>
            <h1>Product name : {product.name}</h1>
        </div>
    );
};

export default UpdateProducts;