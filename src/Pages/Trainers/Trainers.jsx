import Header from '../../Components/Header'
import HeaderImage from '../../Pages/Images/header_bg_5.jpg'
import {trainers} from '../../data'
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Trainer from '../../Components/Trainer'
import './Trainers.css'

const Trainers = () => {
  return (
   <>
   <Header title="Our Trainers" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae molestias quae placeat?
   </Header>
   <section className="trainers">
    <div className="container trainers__container">
       {
        trainers.map(({id, image, name, job, socials}) => {
          return <Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <BsTwitterX/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]}
            ]
          }/>
        })
       }
    </div>
   </section>

   </>
  )
}

export default Trainers