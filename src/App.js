import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './page/Home/Home'
import About from './page/About/About'
import Story from './page/Story/Story';
import Footer from './components/Footer/Footer';

import {useState} from 'react'
import Chef from './page/Chef/chef';

function App() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="App">
      <Navbar 
        isClicked={isClicked} 
        setIsClicked={setIsClicked}
      />
      <Routes>
        <Route path='/' element={<Home setIsClicked = {setIsClicked} />} />
        <Route path='/about' element={<About setIsClicked = {setIsClicked} />} />
        <Route path='/story' element={<Story setIsClicked = {setIsClicked} />} />
        <Route path='/chef' element={<Chef setIsClicked = {setIsClicked} />} />
      </Routes>
       <Footer />
    </div>
    
  );
}

export default App;
