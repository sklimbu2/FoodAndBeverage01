import WrapperImg from '../../../assets/wrapper.jpg'
import './wrapper.css'
import { FaArrowRight } from "react-icons/fa6";
const wrapperStyle = {
    backgroundImage: `url(${WrapperImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '85vh', // Ensures full viewport height
    maxHeight: '85vh',
    width: '100%', // Ensures full width
  };
const Wrapper = () => {
    return(
        <div>
        <div className='wrapper' style={wrapperStyle}>
            <div className='wrapper-background'>
                <div className='wrapper-circle'>
                    <div className='wrapper-content'>
                        <h4 className='wrapper-header01'>EXPERIENCE THE TASTE OF ITALY</h4>
                        <h2 className='wrapper-header02'>GREAT DINING</h2>
                        <h3 className='wrapper-header03'>RESTAURANT</h3>
                        <button className='wrapper-btn'>BOOK NOW<FaArrowRight className='wrapper-icon' /></button>
                    </div>
                    
                </div>
                
            </div>
           
        </div>
         <div className='experience'>
                <h1 className='experience-title'>EXPERIENCE</h1>
            </div>
        </div>    
    )
}
export default Wrapper