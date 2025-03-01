import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import './AdminLogin.css';

import axios from "axios"
//import getBaseUrl from '../utils/baseURL'
import { useNavigate } from 'react-router-dom'
import getBaseUrl from '../../utils/baseURL';

const AdminLogin = () => {
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate()

      const onSubmit = async (data) => {
        // console.log(data)
        try {
           const response =  await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
           })
           const auth = response.data;
        //    console.log(auth)
            if(auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired!, Please login again.');
                    navigate("/")
                }, 3600 * 1000)
            }

            alert("Admin Login successful!")
            navigate("/dashboard")

        } catch (error) {
            setMessage("Please provide a valid email and password") 
            console.error(error)
        }
      }
  return (
    <div className="login-container">
        <div className="login-form-container">
            <h2 className="login-text">Admin Dashboard Login </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-4">
                    <label className="text-design" htmlFor="username">Username</label>
                    <input 
                    {...register("username", { required: true })} 
                    type="text" name="username" id="username" placeholder='username'
                    className="input-design"
                    />
                </div>
                <div className="margin-bottom-4">
                    <label className="text-design" htmlFor="password">Password</label>
                    <input 
                    {...register("password", { required: true })} 
                    type="password" name="password" id="password" placeholder='Password'
                    className="input-design"
                    />
                </div>
                {
                    message && <p className="error-message">{message}</p>
                }
                <div className="login-field-design">
                    <button className="login-text-design">Login </button>
                </div>
            </form>

            <p className="text-center-style">©2025 Book Store. All rights reserved.</p>
        </div>
    </div>
  )
}

export default AdminLogin