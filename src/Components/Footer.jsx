import { Link } from "react-router-dom"
import Logo from '../Pages/Images/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
   <footer>
    <div className="container footer__container">
        <article>
            <Link to="/" className="logo">
                <img src={Logo} alt="footer logo"/>
            </Link>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium ex voluptas nihil? 
                Aspernatur aliquam amet quaerat. Unde, veritatis excepturi?
            </p>
            <div className="footer__socials">
                <a href="https://linkedin.com/"targert="_blank" rel="noreferrer noopener">
                     <FaLinkedin/></a>
                <a href="https://facebook.com/"targert="_blank" rel="noreferrer noopener">
                     <FaFacebook/></a>
                <a href="https://twitter.com/"targert="_blank" rel="noreferrer noopener">
                     <FaXTwitter/></a>
                <a href="https://instagram.com/"targert="_blank" rel="noreferrer noopener">
                     <FaInstagram/></a>
            </div>
        </article>
        <article>
            <h4>Permalinks</h4>
                <Link to="/About">About</Link>
                <Link to="/Plans">Plans</Link>
                <Link to="/Trainers">Trainers</Link>
                <Link to="/Gallery">Gallery</Link>
                <Link to="/Contact">Contact</Link>
        </article>
        <article>
           <h4>Insights</h4>
                <Link to="/Blog">blog</Link>
                <Link to="/Plans">Plans</Link>
                <Link to="/Case Studies">Case Studies</Link>
                <Link to="/communities">Communities</Link>
                <Link to="/FAQs">FAQs</Link>
        </article>
        <article>
            <h4>GetIn Touch</h4>
                <Link to="/Contact Us">Contact Us</Link>
                <Link to="/Support">Support</Link>

        </article>
    </div>
    <div className="footer__copyright">
        <small>2024 EGATOR TUTORIALS &copy; All Rights Reserved</small>
    </div>
   </footer>
  )
}

export default Footer