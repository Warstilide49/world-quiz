import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Play from './pages/Play';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/world-quiz" element={<Home />} />
        <Route path="/world-quiz/play" element={<Play />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
