import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const email = user.email;
    // Get date
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = day + "-" + month + "-" + year;


    const onSubmit = data => {
        // console.log(data);
        const url = 'https://enigmatic-fjord-48506.herokuapp.com/products'
        console.log(url)
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
            })
    };
    return (

        <div className='mt-5 pt-5 w-50 mx-auto'>
            <h1 className='text-white'>Add item</h1>
            <div >
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 p-2' placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                    <input className='mb-2 p-2' value={email} placeholder='Email' {...register("email", { required: true, maxLength: 30 })} />
                    <input className='mb-2 p-2' placeholder='Price' type="number" {...register("price")} required />
                    <input className='mb-2 p-2' placeholder='Quantity' type="number" {...register("quantity")} required />
                    <input className='mb-2 p-2' placeholder='Supplier Name' type="text" {...register("supplierName")} required />
                    <textarea className='mb-2 p-2' placeholder='Description' {...register("description")} required />
                    <input className='mb-2 p-2' placeholder='Img' type="text" {...register("img")} required />
                    <input className='mb-2 p-2' placeholder='Date' type="text" value={date} {...register("date")} required />
                    <input className=' mb-5 btn btn-primary' type="submit" value="Add new Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;