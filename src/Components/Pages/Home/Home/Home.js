import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import MaltiCursore from '../MaltiCursore/MaltiCursore';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div >

            <Helmet>
                <title>Home - Warehouse</title>
            </Helmet>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-12 text-center   ">
                        <h2 className='fw-bold header-title-style '>WELCOME TO MY WAREHOUSE</h2>
                    </div>
                    <div className="ms-5 col-lg-7 col-12 rounded shadow">
                        <Banner></Banner>
                    </div>
                </div>
            </div>
            <Products></Products>
            <MaltiCursore></MaltiCursore>
            <Footer></Footer>
        </div>
    );
};

export default Home;