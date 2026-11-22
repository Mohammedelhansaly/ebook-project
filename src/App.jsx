import './App.css'
import Footer from './features/footer/Footer'
import Navbar from './features/navbar/Navbar'
import CategorieSection from './sections/categorie/CategorieSection'
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
   <CategorieSection/>
    <Footer/>

   </>
  )
}

export default App
