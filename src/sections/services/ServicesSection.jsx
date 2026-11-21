import React, { useRef } from 'react'
import {servicesData} from '../../assets/data/data'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const ServicesSection = () => {
  const container = useRef(null)
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    const tl = gsap.timeline({
      defaults:{
        ease:'power3.out',
        duration: 1.5,
      },
    })
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    })
  })
  return (
    <div ref={container} className='mt-7 px-24 w-full h-50 items-center justify-content gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        servicesData.map((s, i)=>{
          return(
            <div  key={i} className='bg-cyan-50 rounded-lg p-4 h-22 flex items-center gap-4'>
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
