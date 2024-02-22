import Image from '../Pages/Images/values.jpg'
import SectionHead from './SectionHead'
import { IoDiamondSharp } from "react-icons/io5";
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
   <section className="Values">
   <div className="contaianer values__container">
     <div className="values__left">
       <div className="values__image">
            <img src= {Image} alt="ValuesImage"/>
       </div>  
     </div>
    <div className="values__right">
        <SectionHead icon={<IoDiamondSharp/>} title="Values"/>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Tempore error sit alias omnis, iure sint ex repellendus cum ea enim consequuntur repellat vel obcaecati eaque quod quo, reprehenderit, ratione atque.
        </p>
        <div className="values__wrapper">
            {
                values.map(({id, icon, title, desc}) => {
                    return (
                        <Card key={id}className="values__value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                    )
                })
            }
        </div>
    </div>
   </div>

   </section>

      
  )
}

export default Values