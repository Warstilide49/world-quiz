import Map from "../assets/WorldMap";
import ReactCountryFlag from "react-country-flag";
import countryNames from "../assets/countryNames.json";
import { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";
import styles from "../styles/play.module.css";

const Play = ({ allChoices }) => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("Easy");
  const [showUserModal, setShowUserModal] = useState(null);
  const [flagsToFind, setFlagsToFind] = useState({});
  const LEVELS = ["Easy", "Medium", "Hard"];

  useEffect(() => {
    setShowUserModal(true);
  }, []);

  useEffect(() => {
    setFlagsToFind(
      allChoices[LEVELS.findIndex((element) => element === level)] || [],
    );
  }, [allChoices, level]);

  return (
    <div className="flex flex-column" id="play">
      {showUserModal && (
        <UserInfo
          setVisibility={setShowUserModal}
          username={username}
          setUsername={setUsername}
          setLevel={setLevel}
        />
      )}
      <div className={styles.flagHolder}>
        {!showUserModal &&
          Object.keys(flagsToFind).map((element) => (
            <ReactCountryFlag
              key={element}
              className="emojiFlag"
              countryCode={element}
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
              aria-label={countryNames[element]}
            />
          ))}
      </div>
      <Map width="85vw" height="85vh" flagsToFind={flagsToFind} />
    </div>
  );
};

export default Play;
