import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/dr-owl-quiz/" element={Header} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
