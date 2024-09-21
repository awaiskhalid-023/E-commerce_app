import React from 'react'
import assets from '../assets/assets'

function Policy() {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-4'>
            <div>
                <img src={assets.exchange_icon} className='w-5 m-auto mb-5' alt="" />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-5 m-auto mb-5' alt="" />
                <p className='font-semibold'>Easy Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>

            <div>
                <img src={assets.support_icon} className='w-5 m-auto mb-5' alt="" />
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>We provide 24/7 customer support</p>
            </div>

        </div>
    )
}

export default Policy
