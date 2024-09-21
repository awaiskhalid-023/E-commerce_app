import React, { useContext, useState } from 'react';
import { shopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal'; // Assuming CartTotal is properly calculating the total
import Title from '../components/Title';
import assets from '../assets/assets';

function PlaceOrder() {
    const [method,setMethod] =useState ('cod')
    const {navigate} =useContext(shopContext)


    return (
        <div className='flex flex-col justify-between sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* ..... LEFT SIDE ..... */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='enter your e-mail' />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Address' />
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />    
                    <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip code' />
                </div>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
            </div>
            {/* ..... Right Side ..... */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal/>
                </div>
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHODS'}/>
                    {/*....... PAYMENT SELECTION METHOD ....... */}
                    <div className='flex flex-col gap-4 lg:flex-row'>
                        <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_icon} alt="" />
                        </div>
                        <div onClick={()=>setMethod('payfast')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'payfast' ? 'bg-blue-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.payfast_logo} alt="" />
                        </div>
                        <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className='w-full text-end mt-4'>
                        <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm px-3 py-5'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;