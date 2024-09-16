import React from 'react'

const Product = (props) => {
  return (
    <div className='bg-white border border-gray-100 w-44 hover:shadow-2xl transition-shadow duration-300 font-semibold'>
    <div className='w-36 h-44 mx-auto'>
        <img src={props.image} alt="img" className='w-full h-full object-cover p-1' />
    </div>
    <div className='px-1 font-semibold'>{props.item}</div>
    <div className='px-1 text-orange-400 font-semibold'>{props.price}</div>
    <div className='px-1 '><span className='line-through font-semibold text-gray-400 text-xs'>{props.old_price}</span><span className='ml-1 font-semibold text-sm'>{props.discount}</span></div>
    </ div>
  )
}

export default Product