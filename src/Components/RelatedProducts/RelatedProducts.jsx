import React from 'react'
import { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProducts = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproducts-item'>
        {all_product.map((item,i) => {
            if (props.category === item.category) {
              return <Item
                key={i} 
                id={item.id} 
                category={item.category}
                name={item.name} 
                image={item.image} 
                new_price={item.new_price}
                old_price={item.old_price}
                />
            }
            else {
              return ;
            }
          })}
        </div>
    </div>
  )
}

export default RelatedProducts