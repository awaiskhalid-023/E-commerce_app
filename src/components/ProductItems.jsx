import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItems({id,name,image,price}) {
    const {currency} = useContext(shopContext)
    return (
        <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-2 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItems
