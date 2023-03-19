import Map from '../assets/WorldMap'
import ReactCountryFlag from "react-country-flag"
import countryNames from '../assets/countryNames.json';

const Play = ({flagsToFind}) => {

	return(
		<div className='flex' id='play'>
			<Map width="85vw" height="85vh"/>
			<div className="flag-holder">
				{/* {flagsToFind.map((element)=> */}
				{/* 	<ReactCountryFlag */}
		  {/*               className="emojiFlag" */}
		  {/*               countryCode={element} */}
		  {/*               style={{ */}
		  {/*                   fontSize: '2em', */}
		  {/*                   lineHeight: '2em', */}
		  {/*               }} */}
		  {/*               aria-label={countryNames[element]} */}
		  {/*           /> */}
				{/* )} */}
			</div>
			
		</div>
	)
}

export default Play