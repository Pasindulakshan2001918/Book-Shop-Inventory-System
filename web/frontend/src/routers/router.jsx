import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import CartPage from '../pages/books/CartPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <div>Orders</div>
        },
        {
            path: "/about",
            element:<div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        }
      ]
    },
  ]);

  export default router;