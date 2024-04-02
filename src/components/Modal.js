// import {useState, useEffect} from "react"
import "../styles/modal.css";
import countryNames from "../assets/countryNames.json";

const Modal = (props) => {
    const { countryClicked, mouseCoords, setModal } = props;

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
                {countryNames[countryClicked[1]]}
                {/* <button onClick={test}>Bruh</button> */}
            </div>
        </div>
    );
};

export default Modal;
