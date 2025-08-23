import './chef.css'
const Chef = () => {
    return(
        <div className='chef'>
            <div className='chef-bio'>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/Chef.jpg`}
                    alt='Chef'
                    className='chefImage'
                />
                <div className='chef-bioDetail'>
                    <h2>Chef - Ricky Martin</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris. Duis aute 
                        irure dolor in reprehenderit in voluptate velit 
                        esse cillum. 
                    </p>
                </div>
            </div>
            <div className='smallHeader'>
                <div className='line'></div>
                    <h5>NEW DISH</h5>
                    <div className='line'></div>
            </div>
                <h2 className='mainHeader'>CHEF SPECIAL</h2>
            <div className='chef-dish'>
                <div className='dish-ImageNamePrice'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/ChefDish.jpg`}
                        alt='Chef'
                        className='dishImage'
                    />
                    <div className='dish-NamePrice'>
                        <h4 className='dishName'>Pork Ribs</h4>
                        <h4 className='dishPrice'>$330</h4>
                    </div>  
                    <p className='dish-ingredient'>tomato, potatoes, chilly sauce</p>             
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris. Duis aute 
                    irure dolor in reprehenderit in voluptate velit 
                    esse cillum. 
                </p>
            </div>
        </div>
    )
}
export default Chef