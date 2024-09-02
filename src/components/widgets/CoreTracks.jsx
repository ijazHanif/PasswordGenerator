import React from 'react'
import { Wrapper } from '../shared/Wrapper'
import { Button } from '../shared/Button'

const data = [
    {
        id:1,
        header:'Quarter I',
        desc:'CS-101: Object-Oriented Programming using TypeScript',
    },
    {
        id:2,
        header:'Quarter II',
        desc:'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    },
    {
        id:3,
        header:'Quarter III',
        desc:'$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    },
]

export const CoreTracks = () => {
    let header='Core Courses \n (Common in All Specializations):';
 console.log(data, 'data')
  return (
    <section>
        <Wrapper>
           <div className='my-20'>
                <div className='space-y-4 max-w-screen-sm'>
                    <h5 className='text-sm text-teal-800 font-bold'>Program of Studies</h5>
                    <h1 className='text-[2rem] md:text-[2.5rem] font-extrabold whitespace-pre-line leading-snug'>{header}</h1>
                    <p className='md:text-xl font-medium text-primary'>Every participant of the program will start by completing the following three core courses:</p>
                    <Button text='Learn More'/>
                </div>
                <div className='my-10 flex flex-col md:flex-row md:gap-x-8 gap-y-4 max-w-screen-xl'>
                    {
                       data?.map( (item)=>(
                        <div key={item.id} className='flex-1 relative border border-gray-300 rounded-md pt-20 pb-6 md:my-0 px-4 lg:px-6 xl:px-8 md:w-4/12'>
                            <h4 className='font-extrabold hover:text-teal-800'>{item.header}</h4>
                            <p className='text-primary'>{item.desc}</p>
                            <span className='absolute -top-8 right-16 -z-10 text-[10rem] font-extrabold text-gray-200'>{item.id}</span>
                        </div>
                       ))
                    }
                </div>
           </div>
        </Wrapper>
    </section>
  )
}
