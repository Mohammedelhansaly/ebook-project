import React from 'react'
import {servicesData} from '../../assets/data/data'

const ServicesSection = () => {
  return (
    <div className='mt-7 px-24 w-full h-50 items-center justify-content gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        servicesData.map((s, i)=>{
          return(
            <div  key={i} className='bg-sky-100 rounded-lg p-4 h-22 flex items-center gap-4'>
              <div className="icons w-8 h-8">
                <img src={s.icon} alt="icon" />
              </div>
              <p className='text-lg text-gray-500'>{s.desc}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default ServicesSection
