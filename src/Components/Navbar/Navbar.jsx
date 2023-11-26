import './Navbar.css'
import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

const [menu,setMenu] = useState("");
const {gettotalItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>E-COMMERCE</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() =>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to="/">Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Men")}}><Link style={{ textDecoration: 'none'}} to="/mens">Men</Link>{menu === "Men"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Women")}}><Link style={{ textDecoration: 'none'}} to="/womens">Women</Link>{menu === "Women"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Kids")}}><Link style={{ textDecoration: 'none'}} to="/kids">Kids</Link>{menu === "Kids"?<hr/>:<></>}</li><Link></Link>
        </ul>
        <div className='nav-login-cart'>
            <Link to="./login"><button>Login</button></Link>
            <Link to="./cart"><img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{gettotalItems()}</div>
        </div>
    </div>
  )
}

export default Navbar