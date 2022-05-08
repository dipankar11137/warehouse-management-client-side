import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';

const UpdateProducts = () => {
    const [products, setProducts] = useProducts();
    const { updateproductsId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();


    useEffect(() => {
        const uri = `https://enigmatic-fjord-48506.herokuapp.com/updateproducts/${updateproductsId}`;

        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    const onSubmit = data => {
        console.log(data);
        const url = `https://enigmatic-fjord-48506.herokuapp.com/updateproducts/${updateproductsId}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setProducts(result);
                navigator('/');
            })
    }

    return (
        <div className='mt-5 pt-5 bg-white text-center'>

            <h1>Update Products</h1>

            <div className='border w-25 mx-auto p-2 shadow-lg'>
                <img className='w-100 mb-2' src={product.img} alt="" />
                <h5>Product name : {product.name}</h5>
                <div>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <p>Please Input quantity</p>
                        <input className='mb-2 p-2' placeholder='Quantity' type="number" {...register("quantity", { required: true, maxLength: 30 })} />
                        <input className='  btn btn-primary' type="submit" value="Add Quantity" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProducts;