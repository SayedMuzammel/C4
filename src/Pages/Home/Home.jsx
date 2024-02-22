import MainHeader from '../../Components/MainHeader'
import Footer from '../../Components/Footer'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import Testimonials from '../../Components/Testimonials'
import FAQs from '../../Components/FAQs'

import './Home.css'
  
  const Home = () => {
    return (
      <>
      <MainHeader/>
      <Programs/> 
      <Values/>
      <FAQs/>
      <Testimonials/>
      </>
    )
  }
  
  export default Home