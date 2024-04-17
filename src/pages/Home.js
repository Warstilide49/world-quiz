import EarthGlobe from "../assets/globe.jsx";
import { Link } from "react-router-dom";

import "../styles/content.css";

const Home = () => {
  return (
    <div id="home" className="flex">
      <div id="banner" className="flex">
        <div id="home-info">
          <h1>How well do you think you know our planet?</h1>
          <h3 className="sub-info">
            Take the <Link to="/world-quiz/play">quiz</Link> to find out!
          </h3>
        </div>
        <EarthGlobe width={300} height={351.29} colour="#05386B" />
      </div>
      <div>
        <h3>
          Check out the <Link to="/world-quiz/scoreboard">scoreboard</Link> for scores to beat!
        </h3>
      </div>
    </div>
  );
};

export default Home;
