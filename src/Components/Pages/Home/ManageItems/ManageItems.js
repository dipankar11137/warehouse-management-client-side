import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';

const ManageItems = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const procced = window.confirm("Are you sure ?");
        if (procced) {
            const url = `https://enigmatic-fjord-48506.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <div className=' container mt-5 pt-5 text-white text-center pb-5'>
                <h1 className='fw-bold bg-dark w-25 mx-auto p-2 rounded-3 '>MANAGE ITEM </h1>
                <div className='row p-3'>
                    {
                        products.map(product => <div className='container px-3 col-12 col-lg-4 mt-3' key={product._id}>

                            <div className='border-danger border rounded mb-2 shadow-lg'>
                                <img className='w-100 ' src={product.img} alt="" />

                                <button onClick={() => handleDelete(product._id)} className='fs-4 fw-bold remove-button btn btn-danger w-100' >Remove {product.name}</button>
                            </div>

                        </div>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageItems;