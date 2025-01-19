import React from 'react'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../../redux/features/cart/CartSlice';
import './CartPage.css';

const CartPage = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch =  useDispatch()

    const totalPrice =  cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    const handleClearCart  = () => {
        dispatch(clearCart())
    }
  return (
    <> 
    <div className="cartpage-container">
    <div className="cartpage-content">
      <div className="layout-header">
        <div className="cart-heading">Shopping cart</div>
        <div className="button-section ">
          <button
            type="button"
            onClick={handleClearCart}
            className="clearbutton-design"
          >
            <span className="">Clear Cart</span>
          </button>
        </div>
      </div>

      <div className="spaced-top">
        <div className="clearfix">

            {
                cartItems.length > 0 ? ( 
                <ul role="list" className="list-design">
                    {
                         cartItems.map((product) =>(
                            <li key={product?._id} className="list-flex">
                      <div className="image-container">
                        <img
                          alt=""
                          src={`${getImgUrl(product?.coverImage)}`}
                          className="image-design"
                        />
                      </div>
    
                      <div className="product-container">
                        <div>
                          <div className="producttitle-design">
                            <h3>
                              <Link to='/' className="product-title">{product?.title} </Link>
                            </h3>
                            <p className="price-design">${product?.newPrice}</p>
                          </div>
                          <p className="category-design"><strong>Category: </strong> {product?.category}</p>
                        </div>
                        <div className="qyt-container">
                          <p className="qty-design"><strong>Qty:</strong> 1</p>
    
                          <div className="remove-section">
                            <button onClick={() => handleRemoveFromCart(product)} type="button" className="remove-section">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                         ))
                    }
                    
              
                </ul>
                ) : (<p>No product found!</p>)
            }
          
             
        </div>
      </div>
    </div>

    <div className="totalbill-section">
      <div className="billsection-design">
        <p>Subtotal</p>
        <p>${totalPrice ? totalPrice : 0}</p>
      </div>
      <p className="checkout-text">Shipping and taxes calculated at checkout.</p>
      <div className="checkout-link">
        <Link
          to="/checkout"
          className="link-design"
        >
          Checkout
        </Link>
      </div>
      <div className="button-link">
        <Link to="/">
           
          <button
            type="button"

            className="button-design"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  </>
  )
}

export default CartPage;