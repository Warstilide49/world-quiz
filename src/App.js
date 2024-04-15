import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import LoadingScreen from "./components/LoadingScreen.js";
import Home from "./pages/Home";
import Play from "./pages/Play";
import { database } from "./firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [allChoices, setAllChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const collectionRef = collection(database, "countries-to-find");
    getDocs(collectionRef).then((response) => {
      setAllChoices(
        response.docs.map((item) => {
          return item.data();
        }),
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world-quiz" element={<Home />} />
        <Route path="/world-quiz/home" element={<Home />} />
        <Route
          path="/world-quiz/play"
          element={<Play allChoices={allChoices} />}
        />
      </Routes>
      <Footer />
      <LoadingScreen isLoading={isLoading} />
    </BrowserRouter>
  );
}

export default App;
