import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import './BookCard.css';
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/CartSlice'

const BookCard = ({book}) => {

  const dispatch =  useDispatch();

  const handleAddToCart = (product) => {
      dispatch(addToCart(product))
  }

  return (
  <div className=" rounded-lg-transition">
    <div
    className="flex-col-row-container">
    <div className="sm-container">
      <Link to={`/books/${book._id}`}>
        <img
          src={`${getImgUrl(book?.coverImage)}`}

          alt=""
          className="image-container"
        />
      </Link>
    </div>

    <div>
      <Link to={`/books/${book._id}`} className="book-title-link">
        <h3 className="book-title">
          {book.title}
        </h3>
      </Link>
      <p className="book-description">{book?.description.length >80 ? `${book?.description.slice(0, 80)}...` : book
      .description}
      </p>
      <p className="description-text">
       ${book?.newPrice} <span className="strikethrough-text">$ {book?.oldPrice}</span>
      </p>
      <button className="btn-primary" onClick={() => handleAddToCart(book)}>
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default BookCard;