import './aboutUs.css'
import Image01 from '../../../assets/aboutUs-img1.jpg'
import Image02 from '../../../assets/aboutUs-img2.jpg'
import { FaRegComments } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Chef_pic from '../../../assets/chef_pic.png'
const AboutUs = ({setIsClicked}) =>{
    return(
        <div className='aboutUs' onClick={() => setIsClicked(false)}>
            <div className='aboutUs-background'></div>
            <div className='smallHeader'>
                <div className='line'></div>
                    <h5>LUXURY RESTAURANT</h5>
                    <div className='line'></div>
            </div>
                <h2 className='mainHeader'>ABOUT US</h2>
            <div className='aboutUs-partOne'>
                <div className='aboutUs-partOne-half'>
                    <svg viewBox="0 0 200 200" class="circular-text">
                        <path id="text-path" d="M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50" fill="none" />
                    <text>
                        <textPath href="#text-path" startOffset="50%" text-anchor="middle">
                            SERVING DELICIOUS FOOD LAST
                        </textPath>
                    </text>
                    </svg>
                <h3 className='number-16'>16</h3>
                <h5 className='years'>years</h5>
                </div>
                <div className='aboutUs-partOne-half'>
                    <img src={Image01} className='partOne-img' />
                    <img src={Image02} className='partOne-img' />
                </div>
            </div>
            <div className='aboutUs-partTwo'>
                <div className='aboutUs-partTwo-half'>
                    <div className='smallHeader'>
                        <div className='line'></div>
                        <h5>ABOUT RESTAURANT</h5>
                        <div className='line'></div>   
                    </div>
                    <h2 className='mainHeader'>EXPERIENCE ORIGINAL <br /> FOOD TASTE OF ITALY</h2>
                    <p className='aboutUs-paragraph'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled
                    </p>
                    <div className='review'>
                        <h3 className='review-stats'>4.8</h3>
                        <div className='review-line'></div>
                        <div>
                            <div className='review-stars'>
                                <FaStar className='review-star'/>
                                <FaStar className='review-star'/>
                                <FaStar className='review-star'/>
                                <FaStar className='review-star'/>
                                <FaStar className='review-star'/>
                            </div>
                            <p className='review-text'>
                                Review by Google
                            </p>
                        </div>
                    </div>
                </div>
                <div className='aboutUs-partTwo-half'>
                    <div className='chef-comments'>
                        <FaRegComments className='comments-icon'/>
                        <div>
                            <p className='chef-comment'>
                            The food you eat can be either the safest
                            and most powerful medicine or the slowest
                            from of poison.
                            </p>
                            <h3 className='chef-name'>-Alexander Harvard</h3>
                        </div>
                    </div>
                    <div className='chef-profile'>
                        
                        <div className='chef-circle'></div>
                        <h3 className='chef-pic-text'>BEAUTIFUL <br/> DINING</h3>
                        <img src={Chef_pic} className='chef-pic'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs