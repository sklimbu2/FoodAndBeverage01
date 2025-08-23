import {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { GiChestnutLeaf } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { RiDrinksFill } from "react-icons/ri";

import menuItemsData from '../../../assets/menuItems.json'
import './menu.css'
 const menuCategories = [
        { id: 'starters', name: 'Starters', icon: <GiForkKnifeSpoon className='icon' /> },
        { id: 'nonVeg', name: 'Non-Veg', icon: <FaBowlRice className='icon' /> },
        { id: 'vegetarian', name: 'Vegetarian', icon: <GiChestnutLeaf className='icon' /> },
        { id: 'dessert', name: 'Dessert', icon: <FaIceCream className='icon' /> },
        { id: 'drinks', name: 'Drinks', icon: <RiDrinksFill className='icon' /> }
    ];

const Menu = () => {
    const [currentMenu, setCurrentMenu] = useState('starters');
    const [items, setItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false)
    useEffect (() => {
        setIsVisible(false); // Hide items before loading new ones
        
        const timer = setTimeout(() => {
            const filteredItems = menuItemsData.menuItems.filter(item => item.category === currentMenu)
            setItems(filteredItems);
            setIsVisible(true); // Show items after state update
        }, 300); // Short delay for smoother transition
        
    return () => clearTimeout(timer);
    },[currentMenu]);

    const MenuItem = ({item}) => {
    return(
    <div className={`item ${isVisible ? 'visible' : ''}`} >
        <img src={`${process.env.PUBLIC_URL}${item.image}`} />
        <div className='item-details'>
            <div className='item-name-price'>
                <h4>{item.name}</h4>
                <h4>${item.price}</h4>
            </div>
            <p>{item.details}</p>
        </div>    
    </div>
)}
    return(
        <div className='restaurantMenu'>
            <div className='smallHeader'>
                <div className='line'></div>
                <h5>CHOOSE DELICIOUS</h5>
                <div className='line'></div>
            </div>
            <h2 className='mainHeader'>OUR MENU</h2>
            
            <ul className='menuNav'>
                {menuCategories.map((category) => (
                    <li 
                        key={category.id} 
                        onClick={() => setCurrentMenu(category.id)}
                        className={currentMenu === category.id ? 'active' : ''}
                    >
                        <span className='icon'>{category.icon}</span>
                        <p>{category.name}</p>
                    </li>
                ))}
            </ul>
            <div className='menuItems'>
            {items.map((item) => (
                    <MenuItem item={item} key={item.name} />
            ))}
            </div>
        </div>
    );
};

export default Menu;