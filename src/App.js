import "./App.css";
// import drinkData from "./Components/data.js";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
	const [form, setForm] = useState({
		drinkItem: "",
		volume: "",
		alcohol: "",
		price: "",
	});
	const [cards, setcards] = useState([
		{
			drinkItem: "Aldi pinot grigio",
			volume: 750,
			alcohol: 11.5,
			price: 3.99,
		},
		{
			drinkItem: "Stella Artois",
			volume: 2272,
			alcohol: 4.6,
			price: 5.75,
		},
	]);
	if (localStorage.getItem("drinksStorage")) {
		console.log("There is local storage");
	}
	function handleChange(event) {
		const newForm = { ...form, [event.target.name]: event.target.value };
		setForm(newForm);
	}
	function getLocalStorage() {
		return "nothing";
		// if (localStorage.getItem("drinks")) {
		// 	let stored = JSON.parse(localStorage.getItem("drinks"));
		// 	setcards(stored);
		// } else {
		// 	setcards(drinkData);
		// }
	}

	function handleSubmit(event) {
		event.preventDefault();
		// quick workaround to push to cards because setcards won't push
		// there must be an easier way
		const x = [...cards];
		x.push(form);
		setcards(x);
		// update local storage with new card
		localStorage.setItem(JSON.stringify("drinksStorage"), cards);
	}

	return (
		<div>
			<Header handleSubmit={handleSubmit} handleChange={handleChange} />
			<Main cards={cards} form={form} />
			<Footer />
		</div>
	);
}

export default App;
