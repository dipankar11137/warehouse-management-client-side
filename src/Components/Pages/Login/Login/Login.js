import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const navigateSignUp = () => {
        navigator('/signup');
    }

    if (user) {
        navigator(from, { replace: true });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='bg-white'>
            <div className=' w-25 mx-auto mt-5 pt-5 p-3 '>

                <h2 className='text-primary text-center mt-2'>Please login</h2>

                <div className='container border p-3'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary w-50 d-block mx-auto mb-2" type="submit">
                            Login
                        </Button>
                    </Form>

                    <p>New to warehouse ?<span className='text-primary ms-2' type="submit" onClick={navigateSignUp}> Please Register</span></p>
                    <p>Forget Password? <span className='text-primary' type="submit" >Reset Password</span></p>
                </div>

            </div>
            <div className=' fixed-bottom'>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Login;