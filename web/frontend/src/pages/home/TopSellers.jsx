import React, { useEffect, useState } from 'react'
import './TopSeller.css';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure" ]

const TopSellers = () => {

    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    }, [])

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    console.log(filteredBooks)
    

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

        {
            filteredBooks.map((book, index) => (

                <div>{book.title}</div>
            ))
        }

    </div>
  )
}

export default TopSellers;