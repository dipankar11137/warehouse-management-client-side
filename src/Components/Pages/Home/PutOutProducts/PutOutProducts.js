import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const PutOutProducts = () => {
    const { PutOutProductsId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const uri = `http://localhost:5000/updateproducts/${PutOutProductsId}`;

        fetch(uri)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className='mt-5 pt-5 bg-white text-center'>

            <h1>Remove Quantity</h1>

            <div className='border w-25 mx-auto p-2 shadow-lg'>
                <img className='w-100 mb-2' src={product.img} alt="" />
                <h5>Product name : {product.name}</h5>
                <h5>Quantity : {product.quantity}</h5>
                <div>
                    <form className='d-flex flex-column' >
                        <p>Please Input quantity</p>
                        <input className='mb-2 p-2' placeholder='Quantity' type="number" {...register("quantity", { required: true, maxLength: 30 })} />
                        <input className='  btn btn-primary' type="submit" value="Put Out Quantity" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PutOutProducts;