import React, { useEffect, useState } from 'react'
import './TopSeller.css';
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure","Fantasy" ]

const TopSellers = () => {

    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const {data: books = []} = useFetchAllBooksQuery();
    

   

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    
    

  return (
    <div className="topseller-section">
        <h2 className="section-heading">Top Sellers</h2>

        {/* filter category*/}
        <div className="category-section">
            <select 
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category" id="category" className="select-button">
                {
                    categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                }
            </select>
        </div>

        <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
            filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                <SwiperSlide key={index} >
                    <BookCard  book={book}/>
                </SwiperSlide>

                
            ))
        }


        
        
        </Swiper>

       

    </div>
  )
}

export default TopSellers;