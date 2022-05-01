import React from 'react';
import Banner from '../Banner/Banner';
import MaltiCursore from '../MaltiCursore/MaltiCursore';
import Products from '../Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div >
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-12 text-center   ">
                        <h1 className='fw-bold header-title-style '>WELCOME TO MY WAREHOUSE</h1>
                    </div>
                    <div className="col-lg-8 col-12 rounded shadow">
                        <Banner></Banner>
                    </div>
                </div>
            </div>
            <Products></Products>
            <MaltiCursore></MaltiCursore>
        </div>
    );
};

export default Home;