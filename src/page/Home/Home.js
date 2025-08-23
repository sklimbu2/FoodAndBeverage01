import './home.css'
import Wrapper from './Wrapper/Wrapper'
import RestaurantContent from './RestaurantContent/RestaurantContent'
import Menu from './Menu/Menu'
import SignatureDish from './SignatureDish/SignatureDish'
import NewDish from './NewDish/NewDish'
import RestaurantWeek from './RestaurantWeek/RestaurantWeek'
const Home = ({setIsClicked}) => {
    return(
        <div onClick={() => setIsClicked(false)}>
            <Wrapper />
            <RestaurantContent />
            <Menu />
            <SignatureDish />
            <RestaurantWeek />
            <NewDish />
        </div>
    )
}
export default Home