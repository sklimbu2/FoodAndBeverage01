import Food01 from '../../../assets/Food01.png'
import Food02 from '../../../assets/Food02.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import './restaurantContent.css'
const RestaurantContent = () => {
    const features = [
        {id: '1', title: 'FAST DELIVERY', subtitle: 'Within 30 minutes', icon: <TbPackages className='restaurantContent-featureIcon'/>},
        {id: '2', title: 'ABSOLUTE DINNING', subtitle: 'Best buffet restaurant', icon: <FaAward className='restaurantContent-featureIcon'/>},
        {id: '3', title: 'PICKUP DELIVERY', subtitle: 'Grab your food order', icon: <MdOutlineShoppingBag className='restaurantContent-featureIcon'/>}
    ]
    return(
        <div className='restaurantContainer'>
            <div className='restaurantContent'>
                <div className='restaurantContent-inner'>
                    <img src={Food01} />
                    <img src={Food02} />
                </div>
                <div>
                    <div className='smallHeader'>
                        <div className='line'></div>
                        <h5>Since 1998</h5>
                    </div>
                    <h2 className='mainHeader'>WONDERFUL DINING <br /> EXPERIENCE & FOOD.</h2>
                    <div>
                        <p className='restaurantContent-details'>
                            At our restaurant, we believe that dining is more than just a 
                            meal—it’s a celebration of flavors, ambiance, and unforgettable 
                            moments. Every dish is crafted with passion, using the freshest
                             ingredients to delight your senses. From sizzling starters to 
                             decadent desserts, our menu offers a culinary journey that
                              blends tradition with innovation. Whether you're savoring 
                              a perfectly grilled steak, indulging in creamy pasta, or 
                              sipping on a handcrafted cocktail, each bite and sip is 
                              designed to create memories.  
                        </p>
                        <div className='restaurantContent-buttons'>
                            <button>ABOUT RESTAURANT</button>
                            <div className='restaurantContent-phone'><FaPhoneVolume className='restaurantContent-icon' /><span>1-890-77652-998</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='restaurantContent'>
                {
                    features.map((feature) => {
                        return(
                            <div className='restaurantContent-features' key={feature.id}>
                                {feature.icon}
                                <div>
                                    <h3 className='featuresHeader'>{feature.title}</h3>
                                    <p className='featuresSubtitle'>{feature.subtitle}</p>
                                </div>
                            </div>     
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantContent