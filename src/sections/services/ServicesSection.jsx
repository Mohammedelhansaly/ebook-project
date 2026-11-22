
import React, { useRef } from 'react'
import { servicesData } from '../../assets/data/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ServicesSection = () => {
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 1.5,
      },
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.box0', {
      delay: 0.5,
      opacity: 0,
      x: -100,
    })
    .from('.box1', {
      opacity: 0,
      y: 100,
    }, '-=0.7')
    .from('.box2', {
      opacity: 0,
      x: 80,
    }, '-=0.8')

  }, { scope: container })

  return (
    <div
      ref={container}
      className="mt-7 h-55 px-24 w-full items-center gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {servicesData.map((s, i) => (
        <div
          key={i}
          className={`box${i} bg-cyan-50 rounded-lg p-4 min-h-22 flex items-center gap-4`}
        >
          <div className="icons w-8 h-8">
            <img src={s.icon} alt="icon" />
          </div>

          <p className="text-lg text-gray-500">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default ServicesSection
