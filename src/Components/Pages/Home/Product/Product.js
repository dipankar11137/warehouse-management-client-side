import React from 'react';

const Product = ({ product }) => {
    const { name, price, quantity, supplierName, description, img } = product;
    return (
        <div className='col-12 col-lg-4 text-center mt-3'>
            <div className='border rounded-3'>
                <img className='pt-2' src={img} alt="" />

                <div className='text-start ps-3'>
                    <p><small>{description}</small></p>
                    <h3>Name : {name}</h3>
                    <h6>Quantity : {quantity}</h6>
                    <h6>Price : {price}</h6>
                    <h6>Supplier Name : {supplierName}</h6>
                </div>
                <button className='w-100 rounded-3 p-1 fw-bold fs-5 btn btn-warning btn-hover-style'>Update Hare</button>
            </div>

        </div>
    );
};

export default Product;