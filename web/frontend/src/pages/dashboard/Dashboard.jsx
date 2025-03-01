import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import getBaseUrl from '../../utils/baseURL';
import { MdIncompleteCircle } from 'react-icons/md'
//import RevenueChart from './RevenueChart';
import './Dashboard.css';
import Loading from '../../components/Loading/Loading';
import RevenueChart from './RevenueChart';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    // console.log(data)
    const navigate = useNavigate()
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

    // console.log(data)

    if(loading) return <Loading/>

  return (
    <>
     <section className="responsive-grid-layout ">
              <div className="card-center-content">
                <div className="purple-circle-button">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-size">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="heading-large-bold">{data?.totalBooks}</span>
                  <span className="text-gray-muted">Products</span>
                </div>
              </div>
              <div className="card-center-content">
                <div className="green-circle-button ">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-size">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="heading-large-bold">${data?.totalSales}</span>
                  <span className="text-gray-muted">Total Sales</span>
                </div>
              </div>
              <div className="card-center-content">
                <div className="red-circle-button">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-size">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="bold-large-text">{data?.trendingBooks}</span>
                  <span className="gray-semi-bold-text">(13%)</span>
                  <span className="text-gray-muted">Trending Books in This Month</span>
                </div>
              </div>
              <div className="card-center-content">
                <div className="blue-circle-icon">
                <MdIncompleteCircle className="custom-size-6"/>
                </div>
                <div>
                  <span className="heading-large-bold">{data?.totalOrders}</span>
                  <span className="text-gray-muted">Total Orders</span>
                </div>
              </div>
            </section>
            <section className="flexible-grid-layout">
              <div className="card-layout">
                <div className="card-header ">The number of orders per month</div>
                <div className="expanding-content">
                  <div className="centered-card">
                  <RevenueChart />
                  </div>
                </div>
              </div>
              <div className="card-center-content">
                <div className="yellow-icon">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-size">
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <span className="heading-large-bold">02</span>
                  <span className="text-gray-muted">Orders left</span>
                </div>
              </div>
              <div className="card-center-content">
                <div className="teal-icon">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-small-size">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="heading-large-bold">139</span>
                  <span className="text-gray-muted">Website visits (last day)</span>
                </div>
              </div>
              <div className="card-span ">
                <div className="header-layout">
                  <span>Users by average order</span>
                  <button type="button" className="button-link" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="icon-spacing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
    
                </div>
                <div className="scroll-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="card-padding ">
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                      </div>
                      <span className="text-gray">Annette Watson</span>
                      <span className="auto-margin">9.3</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                      </div>
                      <span className="text-gray">Calvin Steward</span>
                      <span className="auto-margin">8.9</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                      </div>
                      <span className="text-gray">Ralph Richards</span>
                      <span className="auto-margin">8.7</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                      </div>
                      <span className="text-gray">Bernard Murphy</span>
                      <span className="auto-margin">8.2</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                      </div>
                      <span className="text-gray">Arlene Robertson</span>
                      <span className="auto-margin">8.2</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                      </div>
                      <span className="text-gray">Jane Lane</span>
                      <span className="auto-margin">8.1</span>
                    </li>
                    <li className="center-flex">
                      <div className="icon-container">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                      </div>
                      <span className="text-gray">Pat Mckinney</span>
                      <span className="auto-margin">7.9</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-column-card">
                <div className="section-header">Students by type of studying</div>
                <div className="grow-padding">
                  <div className="centered-box">Chart</div>
                </div>
              </div>
            </section>
            
    </>
  )
}

export default Dashboard