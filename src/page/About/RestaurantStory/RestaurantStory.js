import StoryImg from '../../../assets/RestaurantStory.jpg'
import './restaurantStory.css'
const RestaurantStory = () =>{
    return(
        <div className='restaurantStory'>
            <img src={StoryImg} className='restaurantStory-img' />
            <div>
                <div className='smallHeader'>
                <div className='line'></div>
                    <h5>SINCE 1998</h5>
                    <div className='line'></div>
                </div>
                <h2 className='mainHeader'>AWESOME DINING <br /> DELICIOUS FOOD</h2>
                <p className='restaurantStory-detail'>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a 
                     type specimen book. It has survived not only five centuries, 
                     but also the leap into electronic typesetting, remaining 
                     essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum 
                      passages, and more recently with desktop publishing software
                       like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button className='restaurantStory-btn'>RESTAURANT STORY</button>
            </div>
        </div>
    )
}
export default RestaurantStory