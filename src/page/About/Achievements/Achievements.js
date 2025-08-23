import Award01 from '../../../assets/award01.png'
import Award02 from '../../../assets/award02.png'
import Award03 from '../../../assets/award03.png'
import './achievements.css'
const Achievements = () =>{
    return(
        <div className='achievements'>
            <div>
                <div className='smallHeader'>
                <div className='line'></div>
                    <h5>AWARDS AND HONOURS</h5>
                    <div className='line'></div>
                </div>
                <h2 className='mainHeader'>Achievements</h2>
            </div>
            <div className='award-imgs'>
                <img src={Award01} className='award-img'/>
                <img src={Award02} className='award-img' />
                <img src={Award03} className='award-img' />
            </div>
        </div>
    )
}
export default Achievements