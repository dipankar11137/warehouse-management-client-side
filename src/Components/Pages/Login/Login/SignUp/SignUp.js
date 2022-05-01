import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';

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
        <div className='mt-5 pt-5  bg-light'>

            <h2 className='text-center'>Please Register</h2>
            <div className='text-center'>
                <form onSubmit={handleRegister}>
                    <input className='mt-2 w-25' type="text" name="name" id="" placeholder='Your name' />
                    <br />
                    <input className='mt-2 w-25' type="email" name="email" id="" placeholder='Email Address' required />
                    <br />
                    <input className='mt-2 w-25' type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input onClick={() => setAgree(!agree)} className='mt-3 mb-2' type="checkbox" name="terms" id="terms" />

                    <label className={` ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Terms and Condition</label>
                    <br />
                    <input
                        disabled={!agree}
                        className='btn btn-primary w-25 mx-auto'
                        type="submit"
                        value="Sign Up" />
                </form>
                <p>Your Already Have An Account <span className='text-primary mt-2' type="submit" onClick={navigateLogin} >Please Login</span></p>

            </div>

        </div>
    );
};

export default SignUp;