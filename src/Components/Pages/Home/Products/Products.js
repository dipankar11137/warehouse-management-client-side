import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();



    return (
        <div className='container text-white mt-5'>
            <h1 className='text-center fw-bold bg-dark p-2 rounded-3'>OUR MAIN PRODUCTS</h1>
            <div className='row mt-5 '>
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button className='btn btn-warning fw-bold'>Show All Products</button>
            <Nav.Link as={Link} to='/showallproducts'>Home</Nav.Link>
        </div>
    );
};

export default Products;