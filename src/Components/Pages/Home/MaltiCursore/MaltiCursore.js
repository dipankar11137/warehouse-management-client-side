import React from 'react';
import { Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import arrow from '../../../../Images/arrow.png';
import carsor from '../../../../Images/Banner/banner-1.jpg';
import carsore from '../../../../Images/Banner/banner-3.jpg';
import './MaltiCursore.css';

const MaltiCursore = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='mt-5 p-5 text-white'>
            <div className='h-75 carsore-style'>
                <Carousel responsive={responsive}>
                    <div>
                        <img src={carsor} alt="" />
                    </div>
                    <div>
                        <img src={carsore} alt="" />
                    </div>
                    <div>
                        <img src={carsor} alt="" />
                    </div>
                    <div>
                        <img src={carsore} alt="" />
                    </div>
                    <div>
                        <img src={carsore} alt="" />
                    </div>
                    <div>
                        <img src={carsor} alt="" />
                    </div>
                    <div>
                        <img src={carsore} alt="" />
                    </div>

                </Carousel>
                <Nav.Link className='text-end mt-2' as={Link} to='/showallproducts'><button className='btn btn-warning fw-bold btn-hover-style fs-4'>See All <img style={{ height: '25px' }} src={arrow} alt="" /></button></Nav.Link>
            </div>
        </div>
    );
};

export default MaltiCursore;