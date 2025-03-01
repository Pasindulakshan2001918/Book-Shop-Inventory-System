import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './CheckoutPage.css';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';
import Swal from 'sweetalert2';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // State to track user authentication
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth, navigate]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [createAOrder, {isLoading, error}] = useCreateOrderMutation(); 
  

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const onSubmit = async(data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    try {
      await createAOrder(newOrder).unwrap();
      Swal.fire({
        title: "Confirmed Order",
        text: "Your order placed successfully!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      navigate("/orders")
    } catch (error) {
        console.error("Error place an order" , error);
        alert("Failed to place an order")
      
    }
  };

  if(isLoading) return <div>Loading....</div>

  return (
    <section>
      <div className="checkout-container">
        <div className="checkoutpage-margin">
          <div>
            <h2 className="codtext-design">Cash On Delivery</h2>
            <p className="totalprice-design">Total Price: ${totalPrice}</p>
            <p className="item-design">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>
          </div>

          <div className="formfilling-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-design">
              <div className="formtext-color">
                <p className="detail-design">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="personal-detail-section">
                <div className="detail-section">
                  <div className="name-section">
                    <label htmlFor="name" className="name-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="filling-design"
                      {...register("name", { required: "Full name is required" })}
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                  </div>

                  <div className="email-section">
                    <label htmlFor="email" className="email-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="filling-design"
                      disabled
                      defaultValue={currentUser?.email}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="phone-number-section">
                    <label htmlFor="phone" className="phone-label">Phone Number</label>
                    <input
                      type="text"  
                      id="phone"
                      className="filling-design"
                      placeholder="+123 456 7890"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\+\d]{1,15}$/,  
                          message: "Invalid phone number format"
                        }
                      })}
                    />
                    {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                  </div>

                  <div className="address-section">
                    <label htmlFor="address" className="address-label">Address / Street</label>
                    <input
                      type="text"
                      id="address"
                      className="filling-design"
                      {...register("address", { required: "Address is required" })}
                    />
                    {errors.address && <p className="error-message">{errors.address.message}</p>}
                  </div>

                  <div className="city-design">
                    <label htmlFor="city" className="city-label">City</label>
                    <input
                      type="text"
                      id="city"
                      className="city-input-field-design"
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && <p className="error-message">{errors.city.message}</p>}
                  </div>

                  <div className="region-design">
                    <label htmlFor="country" className="country-label">Country / Region</label>
                    <input
                      type="text"
                      id="country"
                      className="input-field-design"
                      {...register("country", { required: "Country is required" })}
                    />
                    {errors.country && <p className="error-message">{errors.country.message}</p>}
                  </div>

                  <div className="province-section">
                    <label htmlFor="state" className="province-label">State / Province</label>
                    <input
                      type="text"
                      id="state"
                      className="input-field-design"
                      {...register("state", { required: "State is required" })}
                    />
                    {errors.state && <p className="error-message">{errors.state.message}</p>}
                  </div>

                  <div className="zipcode-section">
                    <label htmlFor="zipcode" className="zipcode-label">Zipcode</label>
                    <input
                      type="text"
                      id="zipcode"
                      className="zipcode-input-field"
                      {...register("zipcode", { required: "Zipcode is required" })}
                    />
                    {errors.zipcode && <p className="error-message">{errors.zipcode.message}</p>}
                  </div>

                  <div className="billing-section">
                    <div className="billsection-design">
                      <input
                        type="checkbox"
                        id="billing_same"
                        className="form-checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="billing_same" className="label-design">
                        I agree to the <Link className="link1-design">Terms & Conditions</Link> and{' '}
                        <Link className="link1-design">Shopping Policy</Link>.
                      </label>
                    </div>
                  </div>

                  <div className="orderplace-section">
                    <div className="orderplace-section-design">
                      <button
                        type="submit"
                        disabled={!isChecked}
                        className="orderplace-button-design"
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
