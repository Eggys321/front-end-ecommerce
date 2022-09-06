import React from 'react';
import '../Styles/Product.css'
import Buttons from './Buttons';

const Products = ({ list, setList, data, cartItems, setCartItems }) => {
  function handleAddToCart(product) {
    // console.log(cartItems);
    // console.log();

    const productSelected = cartItems.find(
      (singleCart) => singleCart.id === product.id
    )
    if (productSelected) {
      setCartItems(
        cartItems.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }
  return (
    <div>
      <Buttons list={list} data={data} setList={setList} />
      <div className='products'>
        {list.map((singleList) => {
          const { title, id, price, image } = singleList
          return (
            <div className='card' key={id}>
              <img className='product-image' src={image} alt='' />
              <div>
                <h3 className='product-name'> {title} </h3>
              </div>
              <div className='product-price'>
                <h2> #{price} </h2>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(singleList)}
                  className='product-add-button'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products