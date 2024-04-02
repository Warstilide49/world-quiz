import { Link } from "react-router-dom";
import "../styles/main.css";

const Header = (props) => {
  return (
    <div className="flex" id="header">
      <h1>World Quiz</h1>
      <div className="ul flex">
        <h3>
          <Link to="/world-quiz">Home</Link>
        </h3>
        <h3>
          <Link to="/world-quiz/play">Play</Link>
        </h3>
        <h3>
          <Link to="/world-quiz/scoreboard">ScoreBoard</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
