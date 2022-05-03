import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';

const ManageItems = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const procced = window.confirm("Are you sure ?");
        if (procced) {
            const url = `http://localhost:5000/products/${id}`;
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
        <div>
            <div className=' container mt-5 pt-5 text-white text-center pb-5'>
                <h1>Manage Item </h1>
                <div className='row'>
                    {
                        products.map(product => <div className='container col-12 col-lg-4 mt-3' key={product._id}>

                            <div className=' '>
                                <div className='border   mb-2'>
                                    <img className='w-100 mb-2' src={product.img} alt="" />

                                    <button onClick={() => handleDelete(product._id)} className='fs-4 fw-bold remove-button btn btn-danger w-100' >Remove {product.name}</button>
                                </div>
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