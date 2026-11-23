import React, { useRef } from 'react'
import {Card, CardTitle} from '../../components/ui/card'
import { categoriesData } from '../../assets/data/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

const CategorieSection = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const container = useRef(null)
  useGSAP(()=>{
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 1.5,
        markers: true,
      },
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
      tl.from('.categorie_card', {
        delay: 0.5,
        y: 100,
        opacity: 0,
        y: 100,
      } , '-=0.7')
  }, {scope:container})
  

  return (
    <div className='px-24 mt-10 ' ref={container}>
      <h1 className='text-4xl font-semibold text-black text-center'>Book Categories</h1>
      <div className="categorie_cards mt-10 grid grid-cols-8 gap-4">
        {
          categoriesData.map((category) => (
            <Card className="categorie_card relative h-44 w-full
             flex items-center justify-center bg-no-repeat bg-cover bg-center"  style={{ backgroundImage: `url(${category.image
            })` }}>
              <CardTitle className="text-white text-lg font-bold" >{category.name}</CardTitle>
            </Card>
          ))
        }
        
      </div>
    </div>
  )
}

export default CategorieSection
