import React, { useRef } from 'react'
import logo from '../../assets/images/logo-bookchimp.png'
import { Heart, Search, User } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  gsap.registerPlugin(useGSAP)
  
  const container = useRef(null)
  useGSAP(()=>{
    const tl = gsap.timeline({
      defaults:{
        ease:'power3.out',
        duration: 1.5,
      },
    })
    tl.from('.logo',{
      y:-200,
      opacity:0,
    })
    .from('.list',{
      y:-200,
      opacity:0,
    }, '<')
  },{scope:container})
  return (
    <div ref={container} className='w-full h-24 flex items-center justify-between -z-10 px-24'>
      <div className="logo w-46">
        <img src={logo} alt="" />
      </div>
      <div className="list flex items-center justify-between ">
        <ul className='flex items-center justify-between gap-8'>
            <li className='font-semibold text-gray-900 transition hover:text-blue-800'>Home</li>
            <li className='font-semibold text-gray-900 transition hover:text-blue-800'>Books</li>
            <li className='font-semibold text-gray-900  ransition hover:text-blue-800'>About</li>
            <li className='font-semibold text-gray-900 transition hover:text-blue-800'>Contact</li>
        </ul>
        <div className="actions flex items-center gap-8 ml-14">
            <div className="favorite relative">
                <div className='w-4 h-4 bg-red-600 flex justify-center items-center rounded-2xl absolute bottom-4 left-4'>
                    <p className='text-white text-xs'>0</p>
                </div>
                <Heart className='text-gray-900 stroke-1 ' />
            </div>
             <div className="user">
                <Button className='text-white px-6 py-5 bg-blue-800 border border-blue-800 transition-all cursor-pointer hover:bg-blue-900' >Connextion</Button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
