import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { shopContext } from '../context/ShopContext';
import assets from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
    const {productId} = useParams();
//    console.log(productId);
    const {products,currency,addToCart} = useContext(shopContext)
    const [productData,setProductData] = useState(false)
    const [image,setImage] = useState('')
    const [size,setSize] = useState('')

    const fetchData= async()=>{
        products.map((item) => {
            if(item._id === productId){
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })
    };
    useEffect(()=>{
        fetchData();
    },[productId,products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* ..... Product Data ..... */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* ..... Product Images ..... */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item,index)=>(
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[75%] '>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                {/* ..... Product Information ..... */}
                <div className='flex-1'>
                    <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_icon} className='w-3.5' alt="" />
                        <img src={assets.star_dull_icon} className='w-3.5' alt="" />
                        <p className='pl-2'>(12)</p>
                    </div>
                    <p className='mt-2 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-3/4'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.size.map((item,index)=>(
                                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-600' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Products</p>
                        <p>Cash on delivery service is available</p>
                        <p>Easy return and exchange policy within 7 days of receiving product</p>
                    </div>
                </div>
            </div>
            {/* ..... Description & Review Sections ..... */}
            <div className='mt-20'>
                <div className=' flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews</p>
                </div>
                <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
                    <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadnot ended.</p>
                    <p>Website design costs can be tricky to nail down. Get an instant estimate for a custom web design with our free website design cost calculator</p>
                </div>
            </div>
            {/* ..... RELATED PRODUCTS ..... */}
            <RelatedProducts category={productData.category} subCategory={productData.subcategory} />
            
        </div>
    ) : <div className='opactiy-0'>Product Not Found</div>
}

export default Product
