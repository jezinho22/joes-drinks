import "./reset.css";
import "./App.css";

// import drinkData from "./Components/data.js";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {

		const [showForm, setshowForm] = useState("close");
		const [showMenu, setShowMenu] = useState("menu-close");

	function handleShowForm(action) {
		console.log(action)
		setshowForm(action);

	}	

	function handleShowMenu(instruction) {
		setShowMenu(instruction);
	}

	return (
		<div>
			<Header
				handleShowMenu={handleShowMenu}
				showMenu={showMenu}
				handleShowForm={handleShowForm}
				
			/>
			<Main 
				handleShowForm = {handleShowForm}
				showForm = {showForm}/>
			<Footer />
		</div>
	);
}

export default App;
