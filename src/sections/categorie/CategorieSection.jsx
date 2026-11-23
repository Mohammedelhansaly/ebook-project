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
      },
      scrollTrigger: {
        trigger: container.current,
        start: 'bottom 50%',
        toggleActions: 'play none none',
      },
    })
    for (let i = 0; i < categoriesData.length; i++){
      tl.from(`.categorie_card:nth-child(${i + 1})`, {
        y: 200,
        opacity: 0,
      } , '-=1')
    }
  }, {scope:container})
  

  return (
    <div className='px-16 mt-10 ' ref={container}>
      <h1 className='text-4xl font-semibold text-black text-center'>Book Categories</h1>
      <div className="categorie_cards mt-10 grid grid-cols-8 gap-4">
        {
          categoriesData.map((category) => (
            <div className="categorie_card relative h-50 w-full rounded-2xl
             flex items-center justify-center bg-no-repeat bg-cover bg-center"  style={{ backgroundImage: `url(${category.image
            })` }}>
              <h3 className="text-white text-lg font-semibold" >{category.name}</h3>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default CategorieSection
