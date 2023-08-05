import Card from "../Card/Card";
import AboutApp from "../About/AboutApp";
import AboutDrink from "../About/AboutDrink";
import Form from "../Form/Form";

import { useState, useEffect } from "react";

export default function Main({handleShowForm, showForm}) {

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
		// this may not work - reset form or directly use set state here
		handleShowForm("close")
		callSetStateForm()
	}

	return (


		<div className = "Main">
			<AboutApp/>
			<AboutDrink/>
			{/* remove cond render and instead reveal with animation */}
			<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					form={form}
					showForm={showForm}
					handleShowForm={handleShowForm}></Form>
				

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
