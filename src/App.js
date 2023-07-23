import "./reset.css";
import "./App.css";

// import drinkData from "./Components/data.js";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {

	function callSetStateForm() {
		setForm({
			drinkItem: "",
			volume: "",
			alcohol: "",
			price: "",
		});
	}
	// updating form inputs
	function handleChange(event) {
		const newForm = { ...form, [event.target.name]: event.target.value };
		setForm(newForm);
	}
	// suubmit button for form
	function handleSubmit(event) {
		event.preventDefault();
		// quick workaround to push to cards because setCards won't push
		// there must be an easier way
		const x = [...cards];
		x.push(form);
		setCards(x);
		// update local storage with new card
		localStorage.setItem("drinksStorage", JSON.stringify(cards));
	}

		const [showForm, setshowForm] = useState(false);
		const [showMenu, setShowMenu] = useState("menu-close");

	function handleShowForm() {
		setshowForm(!showForm);
		if (showForm){ 
		setShowMenu("menu-close");
		callSetStateForm();
		}
	}	

	function handleShowMenu(instruction) {
		setShowMenu(instruction);
	}



	return (
		<div>
			<Header
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				form={form}
				callSetStateForm={callSetStateForm}
				handleShowForm={handleShowForm}
				handleShowMenu={handleShowMenu}
				
			/>
			<Main cards={cards}/>
			<Footer />
		</div>
	);
}

export default App;
