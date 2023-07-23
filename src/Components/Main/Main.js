import Card from "../Card/Card";
import AboutApp from "../About/AboutApp";
import AboutDrink from "../About/AboutDrink";
import { useState, useEffect } from "react";

export default function Main() {

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

	return (


		<div className = "Main">
			<AboutApp/>
			<AboutDrink/>		

			<div className="buttons">
				<button id="sortPricePerUnit">Sort by price per unit</button>
				<button id="sortPrice">Sort by price</button>
				<button className="sortAlpha">Sort by name</button>
			</div>
			<div id="drink-cards">
				{cards.map((card, index) => (
					<Card cardData={card} key={index}/>
				))}
			</div>
		</div>
	);
}
