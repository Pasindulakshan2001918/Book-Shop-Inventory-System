import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import './Login.css';



const Login = () => {

    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

      const handleGoogleSignIn =  () =>{}

  return (
    <div className="login-container">
        <div className="login-content">
            <h2 className="login-texts">Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bottom-margin">
                    <label className="email-label" htmlFor="email">Email</label>
                    <input 
                    {...register("email", { required: true })} 
                    type="email" name="email" id="email" placeholder='Email Address'
                    className="email-container"
                    />
                </div>

                <div className="bottom-margin">
                    <label className="password-label" htmlFor="Password">Password</label>
                    <input 
                    {...register("Password", { required: true })}
                    type="Password" name="Password" id="Password" placeholder='Password'
                    className="password-container"
                    />
                </div>

                {
                    message && <p className="error-message">{'incorrect e-mail or password'}</p>
                }

                <div>
                    <button className="login-button">Login </button>
                </div>
            </form>

            <p className="text-design"> Haven't an account? Please <Link to="/register" className="link-design">Register</Link></p>

            <div>
                <button
                 onClick={handleGoogleSignIn}
                className="google-signin">
                <FaGoogle  className='mr-2'/>
                Sign in with Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login