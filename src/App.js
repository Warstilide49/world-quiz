import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import countryNames from './assets/countryNames.json';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Play from './pages/Play';

const getRandomFlags = () =>{
  const flagsToFind = []
  while(true) {
    let array = Object.keys(countryNames)
    let value = array[Math.floor(Math.random() * array.length)]
    
    if(flagsToFind.indexOf(value) === -1) {
      flagsToFind.push(value) 
    }
    if(flagsToFind.length === 5) {
      break
    }
  }  
  return flagsToFind;
}


function App() {

  const [flagsToFind, setFlagsToFind] = useState([])

  useEffect( () => {
    setFlagsToFind(getRandomFlags);
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/world-quiz" element={<Home />} />
        <Route path="/world-quiz/play" element={<Play flagsToFind={flagsToFind}/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
