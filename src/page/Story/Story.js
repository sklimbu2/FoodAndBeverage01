import VPlayer from '../../assets/PlayVideo.mp4'
import './story.css'
const Story = ({ setIsClicked}) => {
    return(
      <div onClick={() => setIsClicked(false)} className='story'>
        <div className='smallHeader'>
          <div className='line'></div>
          <h5>RESTAURANT SUCCESS</h5>
          <div className='line'></div>
        </div>
        <h2 className='mainHeader'>OUR STORY</h2>
        <video width="750" height="500" controls>
          <source src={VPlayer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='story-journey'>
          <div className='smallHeader'>
            <div className='line'></div>
            <h5>OUR LAST 16 YEARS JOURNEY</h5>
            <div className='line'></div>
          </div>
          <h2 className='mainHeader'>
            WE ARE APARTE A YOUNG AND BEAUTIFUL TEAM WITH A PASSION FOR TASTY AND TRADITIONAL
            REDISCOVERING AND RELIEVING TRADITIONAL ROMANIAN DELICACIES.
          </h2>
          <div className='journey-cards'>
            <div className='journey-card'>
              <div className='journey-background'>
                <p className='journey-date'>1998</p>
              </div>
              <img 
              src='https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              alt='restaurant'
              className='journey-image'
            />
            </div>
            <div className='journey-card'>
              <div className='journey-background'>
                <p className='journey-date'>2015</p>
              </div>
              <img 
              src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='restaurant'
              className='journey-image'
            />
            </div>
            <div className='journey-card'>
              <div className='journey-background'>
                <p className='journey-date'>2020</p>
              </div>
              <img 
              src='https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='restaurant'
              className='journey-image'
            />
            </div>
          </div>
        </div>
        <div className='journey-achievements'>
          <div className='smallHeader'>
          <div className='line'></div>
          <h5>AWARDS AND HONOURS</h5>
          <div className='line'></div>
        </div>
        <h2 className='mainHeader'>ACHIEVEMENTS</h2>
      
        <table className='achievements-cards'>
  <tr>
    <td className='achievements-card'>
      <img 
        src={`${process.env.PUBLIC_URL}/images/award1.png`} 
        alt='award' 
        className='achievements-img'
      />
      <div className='achievements-details'>
        <span>Restaurant Choice</span><br/>
        <span>Award-<b>2016</b></span>
      </div>
    </td>
    <td className='achievements-card'>
      <img 
        src={`${process.env.PUBLIC_URL}/images/award2.png`} 
        alt='award' 
        className='achievements-img'
      />
      <div className='achievements-details'>
        <span>Luxuary Restaurant</span><br/>
        <span>Award-<b>2018</b></span>
      </div>
    </td>
    <td className='achievements-card'>
      <img 
        src={`${process.env.PUBLIC_URL}/images/award3.png`} 
        alt='award' 
        className='achievements-img'
      />
      <div className='achievements-details'>
        <span>British Best Kebab</span><br/>
        <span>Award-<b>2022</b></span>
      </div>
    </td>
    <td className='achievements-card'>
      <img 
        src={`${process.env.PUBLIC_URL}/images/award4.png`} 
        alt='award' 
        className='achievements-img'
      />
      <div className='achievements-details'>
        <span>Good Food Taste</span><br/>
        <span>Award-<b>2022</b></span>
      </div>
    </td>
  </tr>
</table>
        </div>
        <div className='review-tripadvisor'>
          <div>
            25,000+ 
            <b><u> happy food lovers </u></b>
            visited our restaurant.
          </div>
          <img 
              src={`${process.env.PUBLIC_URL}/images/tripadvisor.png`}
              alt='tripadvisor'
              className='tripadvisor-logo'
            />
        </div>
      </div> 
    )
}
export default Story