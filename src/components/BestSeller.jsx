import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';

function BestSeller() {
    const {products}=useContext(shopContext)
    const [bestSeller,setBestSller]= useState([])
    
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller))
        setBestSller(bestProduct.slice(0,5))
    },[])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            {/*.... Rendering Products ..... */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item,index)=>(
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller