import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-0'>
        {children}
    </div>
  )
}
