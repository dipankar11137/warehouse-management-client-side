import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigator = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorShow;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const navigateSignUp = () => {
        navigator('/signup');
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast('Send A Message Your Email');
        }
        else {
            toast('Please Enter Your Email Email Address');

        }
    }


    if (user) {
        navigator(from, { replace: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    if (error) {

        errorShow = <p className='text-danger'>Error: {error?.message}</p>

    }

    return (
        <div className='bg-white text-white pt-5 '>
            <Helmet>
                <title>Login-Warehouse</title>
            </Helmet>
            <div className='w-25  mx-auto mt-5 pt-5 p-3 login-font-style'>

                <h2 className='text-primary text-center mt-2 fw-bold'>Please login</h2>

                <div className='container border p-3'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                            Login
                        </Button>
                    </Form>
                    {errorShow}
                    <p>New to warehouse ?<span className='text-warning ms-2 ' type="submit" onClick={navigateSignUp}> Please Register</span></p>
                    <p>Forget Password? <span className='text-warning' type="submit" onClick={resetPassword}>Reset Password</span></p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <div className=' fixed-bottom'>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;