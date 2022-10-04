// import {useState, useEffect} from "react"
import "../styles/modal.css"

const Modal = (props) =>{

	const {countryClicked, mouseCoords, setModal} = props;

	const test = (e) =>{
		console.log(e.target.parentElement);
	}

	return(
		<div className='modal_bg' onClick={(e) =>{setModal(false)}}>
			<div className='modal' onClick={(e) =>{e.stopPropagation();}} style={{left: mouseCoords[0], top: mouseCoords[1]}}>
				{countryClicked[1]}
				<button onClick={test}>Bruh</button>
			</div>
		</div>
	)
}

export default Modal;