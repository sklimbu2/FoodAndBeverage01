import menuItems from '../../../assets/menuItems.json'
import '../dishContainer.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {useRef, useState} from 'react'

const ITEM_WIDTH = 290;
const SignatureDish = () => {
    const containerRef = useRef()
    const [scrollPosition, setScrollPosition] = useState(0)
    
    const handleScroll = (scrollAmount) => {
        if(!containerRef.current) return

        const newScrollPosition = scrollPosition + scrollAmount
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
        // Ensure we don't scroll past boundaries
        const boundedPosition = Math.max(0, Math.min(newScrollPosition, maxScroll));
    
        setScrollPosition(boundedPosition);
        containerRef.current.scrollTo({
            left: boundedPosition,
            behavior: 'smooth'
        });


    }
    return(
    <div className='dishContainer'>
        <div className='smallHeader'>
            <div className='line'></div>
            <h5>SPECIAL CHOICE</h5>
            <div className='line'></div>
        </div>
        <h2 className='mainHeader'>OUR SIGNATURE DISH</h2>
        <div style={{position:'relative'}}>
            <MdKeyboardArrowLeft 
                className={`arrow-btn ${scrollPosition <= 0 ? 'arrow-hidden' : ''}`}
                onClick={(() => handleScroll(-ITEM_WIDTH))}
            />
            <MdKeyboardArrowRight 
                className={`arrow-btn ${scrollPosition >= 
                (containerRef.current?.scrollWidth - containerRef.current?.clientWidth)
                ? 'arrow-hidden': ''}`} 
                onClick={(() => handleScroll(ITEM_WIDTH))}
            />
        <div 
            className='dishContainer-content'
            ref={containerRef}
        >
            <div className='dishContainer-items'>
                {menuItems.signatureDish.map((item) => (
                <div className='dishContainer-item'>
                    <img src={`${process.env.PUBLIC_URL}${item.image}`}  className='dishContainer-image' />
                        <div className='dishContainer-details'>
                            <div className='dishContainer-namePrice'>
                                <h3 className='dishContainer-title'>{item.name}</h3>
                                <h3 className='dishContainer-title'>${item.price}</h3>
                            </div>
                            <p className='dishContainer-detail'>{item.details}</p>
                        </div>
                </div>
                ))}
            </div>  
        </div>
        </div>        
    </div>
    )
}
export default SignatureDish