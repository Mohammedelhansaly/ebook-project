import './App.css'
import Footer from './features/footer/Footer'
import Navbar from './features/navbar/Navbar'
import HeroSection from './sections/hero/HeroSection'

function App() {

  return (
   <>
   <div className='relative'>
    <Navbar/>
    <HeroSection/>
   </div>
    <Footer/>

   </>
  )
}

export default App
