import Map from "../assets/WorldMap";
import ReactCountryFlag from "react-country-flag";
import countryNames from "../assets/countryNames.json";
import { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";
import styles from "../styles/play.module.css";
import tickMark from "../assets/icons/check-mark 1.svg";
import wrongMark from "../assets/icons/no 1.svg";

const Play = ({ allChoices }) => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("Easy");
  const [showUserModal, setShowUserModal] = useState(null);
  const [flagsToFind, setFlagsToFind] = useState({});

  useEffect(() => {
    setShowUserModal(true);
  }, []);

  useEffect(() => {
    const LEVELS = ["Easy", "Medium", "Hard"];
    const countries =
      allChoices[LEVELS.findIndex((element) => element === level)] || [];
    Object.keys(countries).forEach((key) => {
      countries[key] = {
        countryName: countries[key],
        hasBeenSelected: false,
        isItRight: false,
        // Maybe will add this later
        // chances: 3
      };
    });
    setFlagsToFind(countries);
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
          Object.keys(flagsToFind).map((code) => (
            <div className="flag-container" key={code}>
              <ReactCountryFlag
                svg
                className={`emoji-flag ${flagsToFind[code].hasBeenSelected ? "selected" : ""}`}
                countryCode={code}
                title={countryNames[code]}
                style={{
                  fontSize: "2em",
                }}
                aria-label={countryNames[code]}
              />
              {flagsToFind[code].isItRight &&
                flagsToFind[code].hasBeenSelected && (
                  <img
                    src={tickMark}
                    className="flag-result"
                    alt="Correct"
                    width="20px"
                    height="20px"
                  ></img>
                )}
              {!flagsToFind[code].isItRight &&
                flagsToFind[code].hasBeenSelected && (
                  <img
                    src={wrongMark}
                    className="flag-result"
                    alt="Wrong"
                    width="20px"
                    height="20px"
                  ></img>
                )}
            </div>
          ))}
      </div>
      <Map
        width="85vw"
        height="85vh"
        flagsToFind={flagsToFind}
        setFlagsToFind={setFlagsToFind}
        showUserModal={showUserModal}
      />
    </div>
  );
};

export default Play;
