// import {useState, useEffect} from "react"
import "../styles/modal.css";
import countryNames from "../assets/countryNames.json";
import ReactCountryFlag from "react-country-flag";

const Modal = (props) => {
  const { countryClicked, flagsToFind, mouseCoords, setModal } = props;

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
        {Object.keys(flagsToFind).map((element) => (
            <ReactCountryFlag
              key={element}
              className="emoji-flag"
              countryCode={element}
              style={{
                fontSize: "2em"
              }}
              aria-label={countryNames[element]}
            />
          ))}
        </div>
        {/* {countryNames[countryClicked[1]]} */}
        {/* <button onClick={test}>Bruh</button> */}
      </div>
    </div>
  );
};

export default Modal;
