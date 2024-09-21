import React from 'react'

function Newsletter() {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <div className='text-center' >
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 15% off</p>
            <p className='mt-3 text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required />
                <button type='submit' className='bg-black text-white text-xs py-4 px-10 '>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default Newsletter
