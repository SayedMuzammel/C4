import Header from '../../Components/Header'
import HeaderImage from '../../Pages/Images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In touch" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Inventore enim voluptatum ratione quia, nemo voluptas!
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@vawulens.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/vawulens_fitness" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+233557097546" target="_blank" rel="noreferrer noopener"><BsWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact