import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import  {useParams} from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const { productId, productCategory} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  

return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts category={productCategory}/>
    </div>
  )
}

export default Product