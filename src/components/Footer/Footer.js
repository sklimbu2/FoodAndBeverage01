import logo from '../../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return(
        <footer>
            <div className='footer-half'>
                <div className='footer-main'>
                    <img src={logo} alt='logo' className='footer-logo'/>
                    <div className='footer-main-details'>
                        <h2 className='footer-header'>Foodie Restaurant</h2>
                        <p>
                            A symphony of flavour, where each bite tells
                            a story of passion and precision.
                        </p>
                    </div>
                </div>
                <div className='footer-mainLinks'>
                    <div className='footer-links'>
                        <h4 className='footer-main-title'>Quick Links</h4>
                        <li><Link to='/'>Food Menu</Link></li>
                        <li><Link to='/'>Reservation</Link></li>
                        <li><Link to='/'>Events & Catering</Link></li>
                        <li><Link to='/'>Leave a message</Link></li>
                    </div>
                    <div className='footer-links'>
                        <h4 className='footer-main-title'>About</h4>
                        <li><Link to='/'>Contact</Link></li>
                        <li><Link to='/'>Team</Link></li>
                        <li><Link to='/'>Career</Link></li>
                    </div>
                    <div className='footer-links'>
                        <h4 className='footer-main-title'>Achievements</h4>
                        <li><Link to='/'>Blogs</Link></li>
                        <li><Link to='/'>Awards</Link></li>
                        <li><Link to='/'>Reviews</Link></li>
                    </div>
                </div>
            </div>
            <div className='footer-half'>
                <div>
                    <div className='footer-line'></div>
                    <div className='footer-policyIcons'>
                        <div className='footer-policy'>
                            <li><Link to='/'>Privacy Policy</Link></li>
                            <li><Link to='/'>Terms & Condition</Link></li>
                            <li><Link to='/'>Code of Conduct</Link></li>
                        </div>
                        <div className='footer-socialLinks'>
                            <FaInstagram className='footer-icon'/>
                            <FaFacebook className='footer-icon'/>
                            <FaTripadvisor className='footer-icon'/>
                        </div>
                    </div>
                </div>
                <p>
                    Attentive yet unobtrusive, the service here elevates dining into an art form.
                </p>
            </div>
        </footer>
    )
}
export default Footer