import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, quantity, supplierName, description, img, date } = product;

    const navigate = useNavigate();

    const handleUpdate = _id => {
        navigate(`/updateproducts/${_id}`);
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
                <button onClick={() => handleUpdate(_id)} className='w-100 rounded-3 p-1 fw-bold fs-5 btn btn-warning btn-hover-style'>Update Hare</button>
            </div>

        </div>
    );
};

export default Product;