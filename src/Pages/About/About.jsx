import Header from '../../Components/Header'
import HeaderImage from '../../Pages/Images/header_bg_1.jpg'
import StoryImage from '../../Pages/Images/about1.jpg'
import VisionImage from '../../Pages/Images/about2.jpg'
import MissionImage from '../../Pages/Images/about3.jpg'
import './About.css'


const About = () => {
  return (
    <>
    <Header title=" About Us" image={HeaderImage}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam tempora maxime excepturi ipsum aliquid, 
     in et non assumenda facere.
     </Header>
  
     <section className="about__story">
      <div className="container about__story-container">
      <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
       <div className="about__section-content">
          <h1> Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, natus fugiat aliquam laboriosam ipsa labore atque corrupti nisi vero, ut magnam dolorum recusandae consequatur. 
            Sapiente incidunt, nostrum nisi facilis modi, amet illo repellat maiores quibusdam, aliquid explicabo repudiandae quae ut pariatur soluta!
            Ab soluta rem perspiciatis aliquam placeat.itaque sequi aperiam nesciunt repellendus esse, tempora exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, natus fugiat aliquam laboriosam ipsa labore atque corrupti nisi vero, ut magnam dolorum recusandae consequatur. 
            Sapiente incidunt, nostrum nisi facilis modi, amet illo repellat maiores quibusdam, aliquid explicabo repudiandae quae ut pariatur soluta!
            Ab soluta rem perspiciatis aliquam placeat.itaque sequi aperiam nesciunt repellendus esse, tempora exercitationem?
          </p>
        </div>
      </div>

     </section>

     <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1> Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, natus fugiat aliquam laboriosam ipsa labore atque corrupti nisi vero. 
            Sapiente incidunt, nostrum nisi facilis modi, amet illo repellat maiores quibusdam, aliquid explicabo repudiandae quae ut pariatur soluta!
            Ab soluta rem perspiciatis aliquam placeat.itaque sequi aperiam nesciunt repellendus esse, tempora exercitationem?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
     </section>

     <section className="about__Mission">
      <div className="container about__Mission-container">
      <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1> Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt, natus fugiat aliquam laboriosam ipsa labore atque corrupti nisi vero. 
            Sapiente incidunt, nostrum nisi facilis modi, amet illo repellat maiores quibusdam, aliquid explicabo repudiandae quae ut pariatur soluta!
            Ab soluta rem perspiciatis aliquam placeat.itaque sequi aperiam nesciunt repellendus esse, tempora exercitationem?
          </p>
        </div>
      </div>
     </section>


    </>
  )
}

export default About