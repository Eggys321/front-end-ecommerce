import React,{useState} from 'react';
import {data} from './database';
import Products from './Products';

const Home = ({cartItems,setCartItems}) => {
  const [list,setList] = useState(data)
  // let client = {
  //   name:'efe',
  //   age:40
  // }

  // const {name,age} = client
  return (
    <div>
      <Products
        list={list}
        data={data}
        setList={setList}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  )
}

export default Home