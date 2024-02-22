import {Link} from 'react-router-dom'
import Images from '../Pages/Images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#120DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quisquam iste sapiente sint voluptate facilis.
          </p>
          <Link to= "/Plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Images} alt= "MainHeaderImage" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader;