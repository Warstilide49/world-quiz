import Map from "../assets/WorldMap";
import ReactCountryFlag from "react-country-flag";
import countryNames from "../assets/countryNames.json";
import { useEffect, useState } from "react";
import UserInfo from "../components/UserInfo";
import ConfirmationModal from "../components/ConfirmationModal";
import Timer from "../components/Timer";
import styles from "../styles/play.module.css";
import tickMark from "../assets/icons/check-mark 1.svg";
import wrongMark from "../assets/icons/no 1.svg";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

const Play = ({ allChoices }) => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("Easy");
  const [showUserModal, setShowUserModal] = useState(true);
  const [showRestartModal, setShowRestartModal] = useState(false);
  const [flagsToFind, setFlagsToFind] = useState({});
  const [timerCommand, setTimerCommand] = useState("pause");
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (!showUserModal && !showRestartModal) {
      setTimerCommand("play");
    } else {
      setTimerCommand("pause");
    }

    if (isGameOver) {
      setTimerCommand("pause");
    }
  }, [showUserModal, showRestartModal, isGameOver]);

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

  useEffect(() => {
    setCorrectAnswers(
      Object.values(flagsToFind).reduce(
        (prev, current) => prev + current.isItRight,
        0
      ) || 0
    );
  }, [flagsToFind]);

  useEffect(() => {
    async function postData() {
      if (isGameOver) {
        console.log("HI");
        // Add a new document in collection "leaderboard"
        await setDoc(doc(database, "leaderboard", username), {
          name: username,
          time: time.toFixed(3),
        });
      }
    }
    postData();
  }, [isGameOver]);

  const restartGame = () => {
    const currentFlags = flagsToFind;
    Object.values(currentFlags).forEach((flag) => {
      flag.isItRight = false;
      flag.hasBeenSelected = false;
    });
    setFlagsToFind(currentFlags);
    setTimerCommand("reset");
    setShowRestartModal(false);
    setIsGameOver(false);
  };

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
      {showRestartModal && (
        <ConfirmationModal
          setModal={setShowRestartModal}
          message="Are you sure you want to restart"
          onRestart={restartGame}
        />
      )}
      <div className={styles.timeAndFlag}>
        <Timer time={time} setTime={setTime} command={timerCommand} />
        {!showUserModal && (
          <div className={styles.flagHolder}>
            {Object.keys(flagsToFind).map((code) => (
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
        )}
        {!showUserModal && (
          <div className={styles.resultText}>
            {correctAnswers}/{Object.keys(flagsToFind).length} correct,{" "}
            {username}!
          </div>
        )}
      </div>
      <Map
        width="85vw"
        height="85vh"
        flagsToFind={flagsToFind}
        setFlagsToFind={setFlagsToFind}
        showUserModal={showUserModal}
        setTimerCommand={setTimerCommand}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
      <div className={styles.restartButton}>
        <button
          onClick={() => {
            setShowRestartModal(true);
          }}
        >
          Want to Restart?
        </button>
      </div>
    </div>
  );
};

export default Play;
