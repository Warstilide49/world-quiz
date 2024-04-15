// import {useState, useEffect} from "react"
import "../styles/modal.css";
import countryNames from "../assets/countryNames.json";
import ReactCountryFlag from "react-country-flag";
import { useEffect, useState } from "react";

const Modal = (props) => {
  const {
    countryClicked,
    showUserModal,
    flagsToFind,
    setFlagsToFind,
    setIsGameOver,
    mouseCoords,
    setModal,
    setTimerCommand,
  } = props;
  const [filteredFlags, setFilteredFlags] = useState({});

  useEffect(() => {
    const filteredArray = Object.keys(flagsToFind)
      .filter((objKey) => !flagsToFind[objKey].isItRight)
      .reduce((newObj, key) => {
        newObj[key] = flagsToFind[key];
        return newObj;
      }, {});
    setFilteredFlags(filteredArray);
  }, [flagsToFind]);

  const selectCountry = (selectedCode) => {
    if (countryClicked === selectedCode) {
      flagsToFind[countryClicked].hasBeenSelected = true;
      flagsToFind[countryClicked].isItRight = true;
    } else {
      if (flagsToFind[selectedCode]) {
        flagsToFind[selectedCode].hasBeenSelected = true;
      }
    }
    setFlagsToFind(JSON.parse(JSON.stringify(flagsToFind)));
    checkIfGameShouldEnd();
    setModal(false);
  };

  const checkIfGameShouldEnd = () => {
    const isEveryFlagGuessed = Object.keys(flagsToFind).every(
      (country) => flagsToFind[country].isItRight,
    );
    if (!isEveryFlagGuessed) {
      return;
    }
    setIsGameOver(true);
    setTimerCommand("pause");
    console.log("Add fancy animation here");
  };

  return (
    <div
      className="modal_bg"
      onClick={(e) => {
        setModal(false);
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          left: `${mouseCoords[0] + 5}px`,
          top: `${mouseCoords[1] + 5}px`,
        }}
      >
        <p>Choose your answer</p>
        <div>
          {!showUserModal &&
            Object.keys(filteredFlags).map((code) => (
              <ReactCountryFlag
                key={code}
                onClick={() => {
                  selectCountry(code);
                }}
                // className={flagsToFind[code].hasBeenSelected ? 'selected' : ""}
                svg
                countryCode={code}
                title={countryNames[code]}
                style={{
                  fontSize: "2em",
                  lineHeight: "2em",
                }}
                aria-label={countryNames[code]}
              />
            ))}
        </div>
        {/* {countryNames[countryClicked]} */}
        {/* <button onClick={test}>Bruh</button> */}
      </div>
    </div>
  );
};

export default Modal;
