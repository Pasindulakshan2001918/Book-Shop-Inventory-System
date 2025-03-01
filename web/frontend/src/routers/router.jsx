import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import CartPage from '../pages/books/CartPage';
import CheckoutPage from '../pages/books/CheckoutPage';
import SingleBook from '../pages/books/SingleBook';
import OrderPage from '../pages/books/OrderPage';
import AdminRoute from './AdminRoute';
import AdminLogin from '../components/AdminLogin/AdminLogin';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import ManageBooks from '../pages/dashboard/ManageBooks/ManageBooks';
import AddBook from '../pages/dashboard/Addbook/AddBook';
import UpdateBook from '../pages/dashboard/EditBook/UpdateBook';



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
            element: <div><OrderPage/></div>
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
        },
        {
          path: "/checkout",
          element: <CheckoutPage/>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        }

      ]
    },

    {
      path: "/admin",
      element: <div><AdminLogin/></div>
    },

    {
      path: "/dashboard",
      element: <AdminRoute><div><DashboardLayout/></div></AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><div><Dashboard/></div></AdminRoute>
        },
        {
          path: "add-new-book",
          element: <AdminRoute><AddBook/></AdminRoute>
        },
        {
          path: "edit-book/:id",
          element: <AdminRoute><UpdateBook/></AdminRoute>
        },
        {
          path: "manage-books",
          element: <AdminRoute><ManageBooks/></AdminRoute>
        }
      ]
    }
  ]);

  export default router;