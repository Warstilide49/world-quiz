import { Link } from "react-router-dom";

const Header = (props) =>{

	return(
		<div id='header'>
			<div className=''>
				<h2>World Quiz</h2>
				<ul>
					<li>Play</li>
					<li>ScoreBoard</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;	