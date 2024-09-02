import React from "react";
import { Wrapper } from "../shared/Wrapper";
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp'
import image6 from '../../assets/image6.webp'

const data = [
  {
      header:'Quarter IV',
      desc:'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
  },
  {
      header:'Quarter V',
      desc:'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences'
  }
]
const cards =[
  {
    img:image1,
    header:'Web 3.0 (Blockchain) and Metaverse Specialization'
  },
  {
    img:image2,
    header:'Artificial Intelligence (AI) and Deep Learning Specialization'
  },
  {
   img:image3,
    header:'Cloud-Native Computing Specialization'
  },
  {
    img:image4,
    header:'Ambient Computing and IoT Specialization'
  },
  {
   img:image5,
    header:'Genomics and Bioinformatics Specialization'
  },
  {
    img:image6,
     header:'Network Programmability and Automation Specialization'
   },
]


export const SpecilizeTracks = () => {
  return (
    <section>
      <Wrapper>
        <div>
          {/* Header Side */}
          <div className="max-w-screen-sm space-y-4">
            <h1 className="text-[1.4rem] md:text-[2.5rem] font-bold">Specialized Tracks:</h1>
            <p className="text-sm md:text-lg text-primary">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each.
            </p>
          </div>
          <div>
             {/* main container */}
          <div className="flex flex-col lg:flex-row">
            {/* Right Side */}
            <div 
               className="basis-7/12 flex-1 shadow-xl -shadow-xl rounded-xl py-8 lg:px-6  my-10">
              <h5 className="text-[.8rem] md:text-[1rem] text-teal-800 font-bold">Specialized Track</h5>
              <h1 className="text-[.98rem] md:text-[1.7rem] font-bold max-w-[30rem] my-3">
                Web 3.0 (Blockchain) and Metaverse Specialization
              </h1>
              <p className="text-primary text-sm md:text-lg">
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <button
                className="text-teal-800 underline underline-offset-8 rounded-2xl
                   text-sm md:text-lg flex gap-x-4 items-center my-6 font-bold bg-transparent
                   group hover:bg-teal-800/10 active:bg-primary/20"
              >
                Learn More
                <svg
                  className="mt-2"
                  width="11"
                  height="14"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <div className='my-10 flex flex-col md:flex-row gap-x-10'>
                    {
                       data?.map( (item, index)=>(
                        <div key={index} className=' pb-6 md:my-0 '>
                            <h4 className='text-[0.95rem] md:text-xl cursor-pointer my-2 font-extrabold hover:text-teal-800'>{item.header}</h4>
                            <p className='text-[0.8rem] md:text-[1rem] text-primary'>{item.desc}</p>
                            <span className='absolute -top-8 right-16 -z-10 text-[10rem] font-extrabold text-gray-200'>{index + 1}</span>
                        </div>
                       ))
                    }
                </div>
            </div>
            {/* Left Side */}
            <div 
             className="basis-4/12 flex-1 space-y-8 mt-12">
              {
                cards?.map((item , index)=>(
                  <div key={index} className="flex gap-x-6 items-center cursor-pointer">
                    <div className="shrink-0">
                       <img src={item.img} alt={""} className={"w-36 h-24 object-cover rounded-lg"}/>
                    </div>
                    <div>
                      <p className="font-bold text-teal-800">Specilized Program</p>
                      <h1 className="text-xl font-bold">{item.header}</h1>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
        </div>
      </Wrapper>
    </section>
  );
};
