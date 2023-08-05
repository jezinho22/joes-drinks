import './Header.css'

import Form from "../Form/Form";
import Menu from "../Menu/Menu";

import burgerMenu from "../../Resources/burger-bar.png";

export default function Header({
	handleShowMenu,
	showMenu,
	handleShowForm
}) {


	return (
		<header>
			<div className="headerRow">
				<h1>Joe's Student Drinking App</h1>
				<img
					src={burgerMenu}
					alt="hamburger menu icon"
					onClick={() => handleShowMenu("menu-open")}></img>
				<Menu
					showMenu={showMenu}
					handleShowMenu={handleShowMenu}
					handleShowForm={handleShowForm}
				/>
				{/* <button id="addName" onClick={handleShowForm}>
					Add item
				</button> */}
			</div>

		</header>
	);
}
