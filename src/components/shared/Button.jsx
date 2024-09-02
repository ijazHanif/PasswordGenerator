import React from 'react'

export const Button = ({text}) => {
  return (
    <button className='bg-teal-800 text-white px-5 py-3 rounded-3xl text-lg hover:shadow-xl hover:scale-105 duration-300'>
        {text}
    </button>
  )
}
