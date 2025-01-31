import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3D-pin'
import { FaLocationArrow } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <div className='py-20 ' id='projects'>

        <h1 className='heading'> 
            List of {'' }
            <span className='text-purple'>Personal Projects</span>

        </h1>

        <div className='flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-24 mt-10'>
            {projects.map(({
                id ,title ,des, img ,iconLists , link})=>(
                <div key={id} className='lg:min-h-[32.5rem] h-[32rem]  flex items-center justify-center sm:w-[570px] w-[80vw]
                
                '>
                    <PinContainer title={link} href={link} >
                    <div className="relative flex items-center justify-center  sm:w-[90vw] w-[80vw] overflow-hidden h-[60vh] sm:h-[70vh] lg:h-[50vh] lg:w-[35vw]">
                {/* Background Image Container */}
                <div className="relative overflow-hidden rounded-3xl bg-[#13162d] w-full h-full">
                  <img src="/bg.png" alt="bg/img" className="w-full h-full object-cover" />
                </div>

                {/* Main Image */}
                <img
                  className="z-10 absolute object-contain w-[60vw] h-[50vh] sm:w-[50vw] sm:h-[50vh] lg:w-[35vw] lg:h-[50vh] transform skew-x-12 rounded-2xl"
                  src={img} alt={img}
                />
              </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p
                             className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                 style={{
                                     color: "#BEC1DD",
                                     margin: "1vh 0",
                                     }}
                         >
                              {des}
                         </p>

                         <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                     
                
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
              
                    
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects
