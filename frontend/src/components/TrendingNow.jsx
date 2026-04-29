import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem';
import {ShopContext} from '../context/ShopContext'

const TrendingNow = () => {
    const { products } = useContext(ShopContext);
    const [trendingNow, setTrendingNow] = useState([]);

    useEffect(() => {
      const bestProduct = products.filter((item) => (item.trending))
      setTrendingNow(bestProduct.slice(0,5))
    }, [products])
  
    return (
      <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'TRENDING'} text2={'NOW'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sequi, nihil soluta dolores animi quod pariatur 
          </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
              trendingNow.map((item, index) => (
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
          }
      </div>
  </div>
  )
}

export default TrendingNow