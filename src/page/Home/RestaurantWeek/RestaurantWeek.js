import WeekImg from '../../../assets/restaurantWeek.png'
import { FaApple } from "react-icons/fa";
import google_play from '../../../assets/Google_Play.svg'
import './restaurantWeek.css'
const RestaurantWeek = () => {
    return(
        <div className='restaurantWeek'>
            <img className='restaurantWeek-logo' src={WeekImg} />
            <div>
                <h3 className='restaurantWeek-header'>RESTAURANT WEEK WINTER EDITION 2025</h3>
                <p className='restaurantWeek-subHeader'>
                    Get discounts on all the restaurants you like!
                    Book, eat and review just within a few clicks!
                </p>
                <div className='restaurantWeek-buttons'>
                    <div className='restaurantWeek-button'>
                        <FaApple className='restaurantWeek-downloadIcon' />
                        <div className='restaurantWeek-BtnText'>
                            <h5 className='restaurantWeek-Btnheader'>Available 0n the</h5>
                            <h3 className='restaurantWeek-BtnSubheader'>App Store</h3>
                        </div>
                    </div>
                    <div className='restaurantWeek-button'>
                        <img src={google_play} className='restaurantWeek-downloadLogo' />
                        <div className='restaurantWeek-BtnText'>
                            <h5 className='restaurantWeek-Btnheader'>GET IT ON</h5>
                            <h3 className='restaurantWeek-BtnSubheader'>Google Play</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantWeek