import AboutUs from './AboutUs/AboutUs.js'
import RestaurantFocus from './RestaurantFocus/RestaurantFocus'
import RestaurantStory from './RestaurantStory/RestaurantStory'
import Achievements from './Achievements/Achievements.js'
import Footer from '../../components/Footer/Footer.js'
const About = () =>{
    return(
        <div>
            <AboutUs />
            
            <RestaurantFocus />
            <RestaurantStory />
          
        </div>
    )
}
export default About