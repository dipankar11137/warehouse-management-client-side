import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import arrow from '../../../../Images/arrow.png';

const Products = () => {
    const [products] = useProducts();



    return (
        <div className='container text-white mt-5'>
            <h1 className='text-center fw-bold bg-dark p-2 rounded-3'>OUR ELECTRONICS PRODUCTS</h1>
            <div className='row mt-5 '>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

            <Nav.Link className='text-end mt-2' as={Link} to='/showallproducts'>
                <button className='btn btn-warning  fw-bold btn-hover-style fs-4'>Show All Products <img style={{ height: '25px' }} src={arrow} alt="" />
                </button></Nav.Link>
        </div>
    );
};

export default Products;