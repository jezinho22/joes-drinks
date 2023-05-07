import "./App.css";
// import drinkData from "./Components/data.js";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
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
		console.log("Handle sbumit is working");
		console.log(event.target);
	}
	return (
		<div>
			<Header handleSubmit={handleSubmit} />
			<Main cards={cards} />
			<Footer />
		</div>
	);
}

export default App;
