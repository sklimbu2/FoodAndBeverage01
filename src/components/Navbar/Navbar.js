import {Link} from 'react-router-dom'

import Logo from '../../assets/logo.png'
import './navbar.css'
import { useLocation } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { LuChefHat } from "react-icons/lu";

import {useState} from 'react'
const Navbar = ({isClicked, setIsClicked}) => {
    const menuData = [
        {id: '1', name: 'HOME', icon: <IoHomeOutline className='navlist-icon'/>},
        {id: '2', name: 'ABOUT', icon: <MdOutlineStickyNote2 className='navlist-icon'/>},
        {id: '3', name: 'STORY', icon: <IoMdTimer className='navlist-icon'/>},
        {id: '4', name: 'CHEF', icon: <LuChefHat className='navlist-icon' />}
    ]
    const location = useLocation()
    const menuName = location.pathname === '/' ? 'HOME' : location.pathname.slice(1).toUpperCase()
    return(
        <nav className={!isClicked ? 'closeMenu' : ''}>
            
            <div className='logo'>
                <img src={Logo} />
            </div>
            <div className='hamburger-menu' onClick={() => setIsClicked(!isClicked)}>
                <div className={`hamLine ${isClicked ? 'line1' : ''}`}></div>
                <div className={`hamLine ${isClicked ? 'line2' : ''}`}></div>
                <div className={`hamLine ${isClicked ? 'line3' : ''}`}></div>
            </div>
            <div className='navlists'>
                {menuData.map((data) => (
                <li 
                    className='navlist' 
                    key={data.id}
                >
                    <Link 
                        to={(data.name === 'HOME') ? '/' : data.name.toLocaleLowerCase()}
                        className={`navlist-a ${(menuName === data.name ? 'navSelected':'')}`} 
                    >
                        {data.icon}
                        {data.name}
                    </Link>
                </li >
                ))}
                
            </div>
            <div className='bookingBtn'>
                <CiCalendar className='bookingLogo' />
                BOOK A TABLE
            </div>
        </nav>
    )
}
export default Navbar