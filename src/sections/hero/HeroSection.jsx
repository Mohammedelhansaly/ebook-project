import React from 'react'
import { Button } from '../../components/ui/button'
import hero from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <div className=''>
<div
  className="top-hero top-0 absolute left-0 w-full h-screen -z-10
  bg-no-repeat bg-cover bg-center
  after:content-[''] after:absolute after:inset-0 after:-z-10
  after:bg-[linear-gradient(90deg,rgba(172,228,250,0.51)_0%,rgba(237,221,83,0.44)_37%,rgba(111,153,217,0.7)_100%)]"
  style={{ backgroundImage: `url(${hero})` }}
>
        <div className='mt-14 flex items-center  flex-col'>
        <h1 className='text-gray-900 text-7xl mt-24'>Your favourite books,</h1>
        <h1 className='text-gray-900 text-7xl mt-6'> all in one place</h1>
        <p className='mt-10 w-2xl text-center'>A lectus ac pulvinar tincidunt accumsan ullamcorper dolor at lectus acsed facilisis hac molestie aliquam ut blandit.</p>
        <Button className=' mt-8 z-20 text-white px-6 py-5 bg-blue-800 border border-blue-800 transition-all cursor-pointer hover:bg-blue-900 ' >Discover</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
