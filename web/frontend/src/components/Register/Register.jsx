import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";  // Import auth
import { FaGoogle } from "react-icons/fa";
import './Register.css';

const Register = () => {
  const [message, setMessage] = useState(""); // For error message
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();  // To navigate after successful registration

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      // Register user with Firebase Auth (Email and Password)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Display success message
      setSuccessMessage("Registration successful!");

      // Navigate to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect to login after 2 seconds
    } catch (error) {
      // Check for email already in use error
      if (error.code === "auth/email-already-in-use") {
        setMessage("This email has already been registered.");
      } else {
        setMessage(error.message);  // Show generic error message if registration fails
      }
    }
  };

  // Google Sign-In function
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Sign out the current user if any, to ensure the user selects a new account
      await signOut(auth);  // Sign out current session

      // Firebase sign-in with Google and trigger the popup
      const result = await signInWithPopup(auth, provider);

      // The signed-in user info
      const user = result.user;
      console.log("User signed in with Google:", user);

      // Check if email is already registered
      const email = user.email;
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.length > 0) {
        // If the email is already linked to an account, show message
        setMessage("This email is already linked to an existing account.");
      } else {
        // If email is not linked to any account, proceed with registration
        setSuccessMessage("Registration successful with Google!");

        // Navigate to login page after a short delay
        setTimeout(() => {
          navigate("/login");
        }, 2000); // Redirect to login after 2 seconds
      }
    } catch (error) {
      setMessage("Google Sign-In failed. Please try again.");  // Handle any errors
      console.error(error); // Log error for debugging
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2 className="register-texts">Please Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bottom-margin">
            <label className="email-label" htmlFor="email">Email</label>
            <input 
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="email-container"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="bottom-margin">
            <label className="password-label" htmlFor="Password">Password</label>
            <input 
              {...register("password", { 
                required: "Password is required", 
                minLength: {
                  value: 8,
                  message: "Password must contain 8 characters or more"
                }
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="password-container"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          {/* Show error message */}
          {message && <p className="error-message">{message}</p>}  

          {/* Show success message */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <div>
            <button className="register-button">Register</button>
          </div>
        </form>

        <p className="text-design">
          Have an account? Please <Link to="/login">Login</Link>
        </p>

        {/* Google Sign-In Button */}
        <div>
          <button onClick={handleGoogleSignIn} className="google-signin">
            <FaGoogle className="mr-2" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
