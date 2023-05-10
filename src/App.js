import "./App.css";
// import drinkData from "./Components/data.js";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
	// localStorage.clear();
	const [form, setForm] = useState({
		drinkItem: "",
		volume: "",
		alcohol: "",
		price: "",
	});
	const [cards, setCards] = useState([
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
	// useEffect only runs on page load - or on something specified in second argument
	useEffect(() => {
		// check local storage for cards
		const localCards = localStorage.getItem("drinksStorage");
		if (localCards) {
			setCards(JSON.parse(localCards));
		}
	}, []);

	function handleChange(event) {
		const newForm = { ...form, [event.target.name]: event.target.value };
		setForm(newForm);
	}

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

	return (
		<div>
			<Header
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				form={form}
			/>
			<Main cards={cards} form={form} />
			<Footer />
		</div>
	);
}

export default App;
