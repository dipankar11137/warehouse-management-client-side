import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';

const Product = ({ product }) => {
    const { _id, name, price, quantity, supplierName, description, img, date } = product;

    const [products, setProducts] = useProducts();

    const navigate = useNavigate();

    const handleUpdate = _id => {
        navigate(`/updateproducts/${_id}`);
    }
    const handlePutOut = (e, _id) => {
        const quantity = e.target.quantity.value - 1;
        const updateQuantity = { quantity };
        const url = `https://enigmatic-fjord-48506.herokuapp.com/updateproducts/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });

        // navigate(`/putoutproduct/${_id}`);
        // console.log(_id);
        // const proceed = window.confirm('Are you Sure?');
        // if (proceed) {
        //     const url = `https://enigmatic-fjord-48506.herokuapp.com/updateproducts/${_id}`
        //     fetch(url, {
        //         method: 'DELETE'
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             const remaining = products.filter(product => product._id !== _id)
        //             setProducts(remaining);

        //         })
        // }
    }

    return (
        <div className='col-12 col-lg-4 text-center mt-3'>
            <div className=' border  rounded-3'>
                <img className=' w-100' src={img} alt="" />

                <div className='text-start ps-3 pt-2'>
                    <p><small>{description}</small></p>
                    <h3>Name : {name}</h3>
                    <h6>Quantity : {quantity}</h6>
                    <h6>Price : {price}</h6>
                    <h6>Supplier Name : {supplierName}</h6>
                    <p>Input Date : {date}</p>
                </div>

                <button onClick={() => handleUpdate(_id)} className='w-50 rounded-3 p-1 fw-bold fs-5 btn btn-warning btn-hover-style'>Put In</button>
                <button onClick={() => handlePutOut(quantity, _id)} className='w-50 rounded-3 p-1 fw-bold fs-5 btn btn-danger btn-hover-style'>Put Out</button>

            </div>

        </div>
    );
};

export default Product;