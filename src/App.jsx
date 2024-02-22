import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Plans from './Pages/Plans/Plans';
import Trainers from './Pages/Trainers/Trainers';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='plans' element={<Plans/>}/>
          <Route path='trainers' element={<Trainers/>}/>
          <Route path='contact' element={<Contact/>}/> 
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;