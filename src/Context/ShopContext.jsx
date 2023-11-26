import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product"



export const ShopContext = createContext(null);

const getDefaultCart =() =>{
    let Cart = {};
    for (let index=0; index < all_product.length+1; index++){
        Cart[index] = 0;
    }
    return Cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
  
  
    const addtoCart = (itemId) =>{
        setCartItems((prev) => ({
            ...prev,[itemId]:prev[itemId]+1}))
            
    }

    const removeCart = (itemId) =>{
        setCartItems((prev) => ({
            ...prev,[itemId]:prev[itemId]-1}))
    }

    const totalAmount = () =>{
        let amount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id ===Number(item))
                amount += itemInfo.new_price * cartItems[item]
            }
            
        }
        return amount;
    }

    const gettotalItems = () =>{
        let totalitem =0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalitem += cartItems[item];
            }
        }
        return totalitem
    }

    const contextValue = {all_product,cartItems,addtoCart,removeCart,totalAmount,gettotalItems};

   

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
        
    
}

export default ShopContextProvider;