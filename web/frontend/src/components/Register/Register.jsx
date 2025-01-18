import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import backgroundImage  from "../../assets/background.png"
import './Register.css';

const Register = () => {

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
    <div className="register-container">
        <div className="register-content">
            <h2 className="register-texts">Please Register</h2>

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
                    <button className="register-button">Register </button>
                </div>
            </form>

            <p className="text-design"> Have an account? Please <Link to="/Login" className="link-design">Login</Link></p>

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

export default Register