import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/world-quiz" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
