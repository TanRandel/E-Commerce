import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const Cartitems = () => {
    const { all_product, cartItems, addtoCart, removeCart,totalAmount } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img
                                    className='remove'
                                    src={remove_icon}
                                    onClick={() => {
                                        removeCart(e.id); // Pass the item id to remove
                                    }}
                                    alt=''
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>SubTotal</p>
                            <p>${totalAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${totalAmount()}</h3>
                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>Enter Promo Code</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='CodeHere' />
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartitems;
