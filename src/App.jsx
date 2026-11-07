import './App.css'
import Footer from './features/footer/Footer'
import Navbar from './features/navbar/Navbar'
import HeroSection from './sections/hero/HeroSection'
import ServicesSection from './sections/services/ServicesSection'

function App() {

  return (
   <>
   <div className='relative w-full h-screen z-20'>
    <Navbar/>
    <HeroSection/>
   </div>
   <ServicesSection/>
    <Footer/>

   </>
  )
}

export default App
