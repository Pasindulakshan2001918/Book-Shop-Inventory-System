import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";  
import { auth } from "../../firebase/firebase.config";  
import "./Login.css";

const Login = () => {
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;

        // Clear previous error messages
        setEmailError("");
        setPasswordError("");

        console.log("Email:", email); // Debugging line
        console.log("Password:", password); // Debugging line

        try {
            // Firebase authentication for Email/Password
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful"); // Debugging line

            // Redirect after successful login
            navigate("/");
        } catch (error) {
            console.error("Login Error:", error.code, error.message); // Debugging line

            if (error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
                setEmailError("Invalid email address");
            } else if (error.code === "auth/wrong-password") {
                setPasswordError("Incorrect password");
            } else {
                setEmailError("Invalid credentials. Please check your login details.");
            }
        }
    };

    // Google Sign-In function
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Google Sign-In successful:", user);

            // Redirect after successful login
            navigate("/");
        } catch (error) {
            console.error("Google Sign-In Error:", error.code, error.message); // Debugging line
            setEmailError("Google Sign-In failed. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h2 className="login-texts">Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <div className="bottom-margin">
                        <label className="email-label" htmlFor="email">Email</label>
                        <input 
                            {...register("email", { required: "Email is required" })} 
                            type="email" 
                            id="email" 
                            placeholder="Email Address"
                            className="email-container"
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="bottom-margin">
                        <label className="password-label" htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: "Password is required" })} 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            className="password-container"
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>

                    {/* Login Button */}
                    <button className="login-button">Login</button>
                </form>

                {/* Register Link */}
                <p className="text-design">
                    Haven't an account? Please <Link to="/register">Register</Link>
                </p>

                {/* Google Sign-In Button */}
                <button onClick={handleGoogleSignIn} className="google-signin">
                    <FaGoogle className="mr-2" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
