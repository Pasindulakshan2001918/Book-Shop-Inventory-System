import React, { useEffect, useState } from 'react';
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi';
import { auth } from '../../firebase/firebase.config'; // Import the Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';
import './OrderPage.css';

const OrderPage = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUserEmail);

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserEmail(user.email); // Set the current user's email
      } else {
        setCurrentUserEmail(null); // If no user is logged in
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error getting orders data</div>;

  if (!currentUserEmail) {
    return (
      <div>
        <p>Please log in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="order-wrapper">
      <h2 className="">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={order._id} className="order-container ">
              <p className="badge"># {index + 1}</p>
              <h2 className="bold-font">Order ID: {order._id}</h2>
              <p className="text-design">Name: {order.name}</p>
              <p className="text-design">Email: {order.email}</p>
              <p className="text-design">Phone: {order.phone}</p>
              <p className="text-design">Total Price: ${order.totalPrice}</p>
              <h3 className="text-font">Address:</h3>
              <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
              <h3 className="text-font">Products Id:</h3>
              <ul>
                {order.productIds.map((productId) => (
                  <li key={productId}>{productId}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
