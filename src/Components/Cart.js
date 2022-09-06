import React from 'react';
import '../Styles/Cart.css'

const Cart = ({ cartItems, setCartItems }) => {
   function handleIncrease() {}
   function handleDecrease() {}

  return (
    <div className='cart-items'>
      <div className='cart-items-header'>
        <h2>Cart Items</h2>
        {cartItems.length === 0 && (
          <div className='cart-items-empty'>
            <h3>No items in the cart</h3>
          </div>
        )}
      </div>
      <div>
        {cartItems.map((item) => {
          const { image, id, title, price, quantity } = item
          return (
            <div key={id} className='cart-items-list'>
              <img className='cart-items-image' src={image} alt='' />
              <div className='cart-items-name'>
                <h2> {title.slice(0, 25)} </h2>
              </div>
              <div className='cart-items-function'>
                <button
                  className='cart-items-add'
                  onClick={() => handleIncrease}
                >
                  Increase
                </button>
                <button
                  className='cart-items-remove'
                  onClick={() => handleDecrease}
                >
                  Decrease
                </button>
              </div>
              <div className='cart-items-price'>
                <h4>
                  {' '}
                  {quantity} * {price}
                </h4>
                <button>remove</button>
              </div>
            </div>
          )
        })}
      </div>
      {cartItems.length >= 1 && (
        <div>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: '10rem',
              fontSize: '30px',
              borderRadius: '10px',
            }}
            onClick={() => setCartItems([])}
          >
            
            {cartItems.length === 1 ? 'clear item' : 'clear all'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
