import Card from "../Card/Card";
import AboutApp from "../About/AboutApp";
import AboutDrink from "../About/AboutDrink";
import Form from "../Form/Form";

import "./Main.css";

import { useState } from "react";
import useLocalStorage from "use-local-storage";

export default function Main({ handleShowForm, showForm }) {
	// localStorage.clear();
	const [form, setForm] = useState({
		drinkItem: "",
		volume: "",
		alcohol: "",
		price: "",
		units: "",
		pricePerUnit: "",
		multiCount: "",
		multiVolume: "",
		rating: 0,
	});

	//enable form to display multipack as volume
	const [multipack, setMultipack] = useState(false);
	// enable cards to display chosen equivalent
	const [equivalent, setEquivalent] = useState("pint");
	// display additional form inputs
	function handleMultipack(event) {
		setMultipack(event.target.checked);
	}

	//set state for comparison with equivalents
	function handleComparison(event) {
		event.preventDefault();
		setEquivalent(event.target.value);
		console.log(event.target.value);
	}

	const [cards, setCards] = useLocalStorage("localCards", [
		{
			drinkItem: "Aldi pinot grigio",
			volume: 750,
			alcohol: 11.5,
			price: 3.99,
			units: 8.6,
			pricePerUnit: 0.46,
		},
		{
			drinkItem: "Stella Artois",
			volume: 1760,
			alcohol: 4.6,
			price: 5.75,
			units: 10.5,
			pricePerUnit: 0.55,
		},
	]);

	// ### calculations for card values ###
	function alcoholUnits(newCard) {
		return ((newCard.volume * newCard.alcohol) / 1000).toFixed(1);
	}
	function pricePerUnit(newCard) {
		return (
			newCard.price /
			((newCard.volume * newCard.alcohol) / 1000)
		).toFixed(2);
	}

	// reset form state  - is this really needed? won't reset form reset this as well?
	function callSetStateForm() {
		setForm({
			drinkItem: "",
			volume: "",
			alcohol: "",
			price: "",
			units: "",
			pricePerUnit: "",
			multiCount: "",
			multiVolume: "",
		});
	}
	// updating form inputs
	function handleChange(event) {
		let newForm = { ...form, [event.target.name]: event.target.value };
		if (newForm.multiCount && newForm.multiVolume) {
			let x = newForm.multiCount * newForm.multiVolume;
			newForm = { ...newForm, volume: x };
		}
		setForm({ ...newForm });
	}

	// submit button for form
	function handleSubmit(event) {
		event.preventDefault();
		// make form into a new card and add to cards
		// add calculations to it
		let tempForm = {
			...form,
			units: alcoholUnits(form),
			pricePerUnit: pricePerUnit(form),
		};
		// need units to then do pintEquivalent
		setCards([...cards, { ...tempForm }]);
		setMultipack(false);
		closeForm(event);

		// reset form
		event.target.reset();
		const viewCards = document.querySelector("#drink-cards");
		viewCards.scrollIntoView({ behavior: "instant", block: "start" });
	}

	function closeForm() {
		// this may not work - reset form or directly use set state here
		handleShowForm("close");
		callSetStateForm();
		// scroll down to view cards
	}

	function handleSort(event) {
		let sorted = [...cards];
		let sortBy = event.target.value;
		if (sortBy === "drinkItem") {
			setCards(alphaSort(sorted));
		} else if (sortBy === "rating") {
			sorted.sort((a, b) => b[sortBy] - a[sortBy]);
			setCards(sorted);
		} else {
			sorted.sort((a, b) => a[sortBy] - b[sortBy]);
			setCards(sorted);
		}
	}

	function alphaSort(array) {
		array.sort((a, b) => {
			const nameA = a.drinkItem.toUpperCase(); // ignore upper and lowercase
			const nameB = b.drinkItem.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			// names must be equal
			return 0;
		});
		return array;
	}

	function handleDelete(cardName) {
		let tempCards = [...cards];
		const index = tempCards.findIndex((i) => i.drinkItem === cardName);
		tempCards.splice(index, 1);
		setCards(tempCards);
	}

	function handleRating(rating, cardName) {
		console.log(rating);
		let tempCards = [...cards];
		const index = tempCards.findIndex((card) => card.drinkItem === cardName);
		tempCards[index].rating = rating;
		setCards(tempCards);
	}

	return (
		<div className="Main">
			<AboutApp />
			<AboutDrink />
			<Form
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				form={form}
				showForm={showForm}
				handleShowForm={handleShowForm}
				handleMultipack={handleMultipack}
				multipack={multipack}></Form>
			<div id="drink-cards"></div>
			<div className="options">
				<label htmlFor="sort-by">
					Sort by:
					<select id="sort-by" name="sort-by" onChange={handleSort}>
						<option value="drinkItem">Name</option>
						<option value="pricePerUnit">Price per unit</option>
						<option value="price">Price</option>
						<option value="rating">Rating</option>
					</select>
				</label>
				<label htmlFor="comparison">
					Comparison:
					<select id="comparison" name="comparison" onChange={handleComparison}>
						<option value="pint">Pint of beer</option>
						<option value="bottleWine">Bottle of wine</option>
						<option value="wineGlass">Glass of wine</option>
						<option value="rumAndCoke">Single rum</option>
					</select>
				</label>
			</div>
			<div className="cards-container">
				{cards.map((card, index) => (
					<Card
						cardData={card}
						key={index}
						handleDelete={handleDelete}
						handleComparison={handleComparison}
						equivalent={equivalent}
						handleRating={handleRating}
					/>
				))}
			</div>
		</div>
	);
}
