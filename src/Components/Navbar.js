import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import Marquee from 'react-fast-marquee';

const Navbar = ({cartItems}) => {
    let saleInfo = 'Flash Sales!!!'
  return (
    <div>
        <header>
            <h2>Eggys Shop</h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>

                    </li>
                    <li>
                        <Link to='/Cart'>Cart({cartItems.length})  </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Marquee speed={60} gradient={false}  style={{backgroundColor:'blue', color:'white',width:'80%',margin:'auto'}}>
            <h2> {saleInfo} </h2>
           

        </Marquee>
    </div>
  )
}

export default Navbar