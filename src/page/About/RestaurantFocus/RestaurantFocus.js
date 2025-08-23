import './restaurantFocus.css'
import Image01 from '../../../assets/RestaurantFocus-img01.jpg'
import Image02 from '../../../assets/RestaurantFocus-img02.jpg'
import Image03 from '../../../assets/RestaurantFocus-img03.jpg'
const RestaurantFocus = () =>{
    return(
        <div className='restaurantFocus'>
            <div className='smallHeader'>
                <div className='line'></div>
                    <h5>KNOW MORE</h5>
                    <div className='line'></div>
                </div>
                <h2 className='mainHeader'>RESTAURANT FOCUS</h2>
            <div className='restaurantFocus-cards'>
                <div className='restaurantFocus-card'>
                    <img src={Image01} className='restaurantFocus-img' />
                    <div className='restaurantFocus-cardDetail'>
                        <h3 className='restaurantFocus-cardHeader'>PRIVATE DINING</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
                <div className='restaurantFocus-card'>
                    <img src={Image02} className='restaurantFocus-img' />
                    <div className='restaurantFocus-cardDetail'>
                        <h3 className='restaurantFocus-cardHeader'>THE RAW BAR</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
                <div className='restaurantFocus-card'>
                    <img src={Image03} className='restaurantFocus-img' />
                    <div className='restaurantFocus-cardDetail'>
                        <h3 className='restaurantFocus-cardHeader'>OUTDOOR CATERING</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantFocus