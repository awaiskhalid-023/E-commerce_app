import React, { useContext, useEffect, useState } from 'react'
import {shopContext} from '../context/ShopContext'
import assets from '../assets/assets'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

function Collection() {
    const {products, search, showSearch} = useContext(shopContext)
    const [showFilter,setShowFilter] = useState(false)
    const [filterProducts,setFilterProducts] = useState([])
    const [category,setCategory]=useState([])
    const [subCategory,setSubCategory] = useState ([])
    const [sortType,setSortType] = useState('relavent')

    const toggleCategory=(e)=>{
        if (category.includes(e.target.value)) {
            setCategory (prev => prev.filter (item => item !== e.target.value))
        } else {
            setCategory(prev=>[...prev, e.target.value])
        }
    }
    const toggleSubCategory=(e)=>{
        if (subCategory.includes(e.target.value)) {
            setSubCategory (prev => prev.filter (item => item !== e.target.value))
        } else {
            setSubCategory(prev=>[...prev, e.target.value])
        }
    }

    const applyFilter = ()=>{
        let productsCopy= products.slice()
        if (showSearch && search) {
            productsCopy=productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length>0) {
            productsCopy=productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length>0) {
            productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }
    const sortProducts= ()=>{
        let filterProductsCopy = filterProducts.slice()

        switch (sortType) {
            case 'low-high':
                setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price-b.price)))
                break;
            case 'high-low':
                setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price-a.price)))
                break;
        
            default:
                applyFilter();
                break;
        }
    }
    useEffect(()=>(applyFilter()),[category,subCategory,search,showSearch])
    useEffect(()=>(sortProducts()),[sortType])


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* ..... Filter Otions ..... */}
            <div className='min-w-60'>
                <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-0' : '-rotate-90'}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/* ..... Category Filter ..... */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 font-medium text-sm'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
                        </p>
                    </div>
                </div>
                {/* ..... Sub-Category Filter ..... */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 font-medium text-sm'>SUB CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Tops'} onChange={toggleSubCategory} />Tops
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Bottoms'} onChange={toggleSubCategory} />Bottoms
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Winters'} onChange={toggleSubCategory} />Winters
                        </p>
                    </div>
                </div>

            </div>
            {/* ..... Right Side ..... */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                    {/* ..... Product Sort ..... */}
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-200 text-sm px-2'>
                        <option value="relavent"> Sort by: Relavent</option>
                        <option value="low-high"> Sort by: Low to High</option>
                        <option value="high-low"> Sort by: High to Low</option>

                    </select>
                </div>
                {/*.... Rendering Products ..... */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    filterProducts.map((item,index)=>(
                        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
            </div>
           
        </div>
    )

}

export default Collection
