import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Footer from '../../../Shared/Footer/Footer';
import SocialLogin from '../../SocialLogin/SocialLogin';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name);

        createUserWithEmailAndPassword(email, password);
        updateProfile({ displayName: name });
        alert('Successfully Create Your Profile');
        navigate('/');
    }

    return (
        <div className='mt-5 pt-5  bg-light text-white'>
            <Helmet>
                <title>SignUp-Warehouse</title>
            </Helmet>
            <div className='w-25  mx-auto mb-5 pb-5 pt-5 p-3 login-font-style'>
                <h2 className='text-center fw-bold'>Please Register</h2>
                <div className=' border p-3 text-center'>
                    <form onSubmit={handleRegister}>
                        <input className='mt-2 w-100' type="text" name="name" id="" placeholder='Your name' />
                        <br />
                        <input className='mt-2 w-100' type="email" name="email" id="" placeholder='Email Address' required />
                        <br />
                        <input className='mt-2 w-100' type="password" name="password" id="" placeholder='Password' required />
                        <br />
                        <input onClick={() => setAgree(!agree)} className='mt-3 mb-2' type="checkbox" name="terms" id="terms" />

                        <label className={` ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms and Condition</label>
                        <br />
                        <input
                            disabled={!agree}
                            className='btn btn-primary  mx-auto'
                            type="submit"
                            value="Sign Up" />
                    </form>
                    <p>Your Already Have An Account <span className='text-primary mt-2' type="submit" onClick={navigateLogin} >Please Login</span></p>
                    <div className=' mx-auto pb-5'>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;