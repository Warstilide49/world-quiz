import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import countryNames from './assets/countryNames.json';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Play from './pages/Play';
import { app, database } from './firebaseConfig.js'
import { collection, getDocs } from 'firebase/firestore'

function App() {

  console.log(process.env);
  const collectionRef = collection(database, 'levels');
  getDocs(collectionRef).then((response)=>{
    console.log(response.docs.map((item)=>{
      return item.data();
    }))
  })
  const [flagsToFind, setFlagsToFind] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world-quiz" element={<Home />} />
        <Route path="/world-quiz/play" element={<Play flagsToFind={flagsToFind}/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
