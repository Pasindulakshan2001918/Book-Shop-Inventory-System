import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import './DashboardLayout.css';
import Loading from '../../components/Loading/Loading';
import getBaseUrl from '../../utils/baseURL';

const DashboardLayout = () => {
  
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
      }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                })

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    /*if(Loading) return <Loading/>
    const navigate = useNavigate()
    const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")*/
  

  return (
    <section className="container-wrapper ">
    <aside className="sidebar-container">
      <a href="/" className="button-circle ">
        <img src="/fav-icon.png" alt="" />
      </a>
      <div className="sidebar-wrapper">
        <nav className="content-container">
          <a href="#" className="btn-interactive">
            <span className="visually-hidden">Folders</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </a>
          <Link to="/dashboard" className="button-centered">
            <span className="visually-hidden">Dashboard</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </Link>
          <Link to="/dashboard/add-new-book" className="btn-interactive">
            <span className="visually-hidden">Add Book</span>
            <HiViewGridAdd className="icon-small"/>
          </Link>
          <Link to="/dashboard/manage-books" className="btn-interactive">
            <span className="visually-hidden">Documents</span>
            <MdOutlineManageHistory className="icon-small"/>
          </Link>
        </nav>
        <div className="icon-container">
          <button className="btn-interactive">
            <span className="visually-hidden">Settings</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
    <div className="expand-text">
      <header className="header-bar">
        <button className="icon-button">
          <span className="visually-hidden">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div className="container-centered">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="icon-positioned">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" role="search" placeholder="Search..." className="input-field" />
        </div>
        <div className="align-right-center">
          <button className="button-icon ">
            <span className="visually-hidden">User Menu</span>
            <div className="responsive-column-rightt">
              <span className="text-bold-medium">Grace Simmons</span>
              
            </div>
            <span className="avatar-icon">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" className="cover-imager"/>
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="icon-visible-sm ">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg> 
          </button>
          <div className="left-margin-spacing">
            <button className="interactive-icon">
              <span className="visually-hidden">Notifications</span>
              <span className="notification-dot"></span>
              <span className="notification-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
            onClick={handleLogout}
            className="interactive-icon">
              <span className="visually-hidden">Log out</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="spacious-container ">
        <div className="responsive-flex-layout">
          <div className="margin-right-large">
            <h1 className="heading-large">Dashboard</h1>
            <h2 className="text-muted-left">Book Store Inventory</h2>
          </div>
          <div className="responsive-alignment ">
            <Link to="/dashboard/manage-books" className="purple-button">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-offset">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manage Books
            </Link>
            <Link to="/dashboard/add-new-book" className="purple-button-highlight">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-offset-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Book
            </Link>
          </div>
        </div>
       <Outlet/>
      </main>
    </div>
  </section>
  )
}

export default DashboardLayout