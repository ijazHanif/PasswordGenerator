import React from 'react'
import dao from '../../assets/dao_logo.png'
import { Wrapper } from '../shared/Wrapper'

const Header = () => {         // layout has only header and footer
  return (
    <>
    <Wrapper>
      <header className='flex justify-between items-center mx-auto bg-white px-2 py-3 sticky top-0'>
        <div>
            <img src={dao} alt="" />
        </div>
        <ul className='flex space-x-4 text-md font-semibold '>
            <li>Home</li>
            <li>Courses</li>
        </ul>
      </header>
    </Wrapper>
    </>
  )
}

export default Header
