import Card from "../Card/Card";
import AboutApp from "../About/AboutApp";
import AboutDrink from "../About/AboutDrink";
import Form from "../Form/Form";

import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function Main({handleShowForm, showForm}) {

	// localStorage.clear();
	const [form, setForm] = useState({
		drinkItem: "",
		volume: "",
		alcohol: "",
		price: "",
		units:"",
		pricePerUnit:""
	});

	// const [cards, setCards] = useState();

	const [cards, setCards] = useLocalStorage("localCards",[
		{
			drinkItem: "Aldi pinot grigio",
			volume: 750,
			alcohol: 11.5,
			price: 3.99,
			units: 8.6,
			pricePerUnit: 0.46
		},
		{
			drinkItem: "Stella Artois",
			volume: 2272,
			alcohol: 4.6,
			price: 5.75,
			units: 10.5,
			pricePerUnit: 0.55
		},
	])

	// useEffect(() => {
	//   let x = [...cards]
	//   x.forEach((card)=> {
	// 	return {...card, units:alcoholUnits(card),pricePerUnit:pricePerUnit(card)}
	// 	})
	// }, [])
	
	// ### calculations for card values ### 
	function alcoholUnits(newCard) {
		console.log("units")
		return ((newCard.volume * newCard.alcohol) / 1000).toFixed(1);
	}
	function pricePerUnit(newCard){
		return (newCard.price / ((newCard.volume * newCard.alcohol) / 1000)).toFixed(2)
	}

	// reset form state  - is this really needed? won't reset form reset this as well?
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
		console.log(newForm)
		setForm({ ...newForm});
	}

	// submit button for form
	function handleSubmit(event) {
		event.preventDefault();
		// make form into a new card and add to cards
		// add calculations to it
		let tempForm = {...form, units:alcoholUnits(form),pricePerUnit:pricePerUnit(form)}
		// need units to then do pintEquivalent
		setCards([...cards, {...tempForm}]);

		closeForm();

		// reset form
		event.target.reset();
		console.log(cards)
	}

	function closeForm(){
		// this may not work - reset form or directly use set state here
		handleShowForm("close")
		callSetStateForm()
		// scroll down to view cards
		const viewCards = document.querySelector('#drink-cards')
		viewCards.scrollIntoView({ behavior: 'smooth', block: 'center' })
		// update local storage with new card
		console.log(cards)
		// localStorage.setItem('localCards',JSON.stringify(cards))
	}

	function handleSort(sortBy){
		console.log(sortBy)
		let sorted = [...cards]
		if (sortBy === "drinkItem"){
			setCards(alphaSort(sorted))
		} else {
			sorted.sort((a, b)=> a[sortBy] - b[sortBy])
		setCards(sorted)		
		}
	}

	function alphaSort(array){
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
		return array
	}
	return (
		<div className = "Main">
			<AboutApp/>
			<AboutDrink/>
			<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					form={form}
					showForm={showForm}
					handleShowForm={handleShowForm}></Form>
			<div id="drink-cards"></div>
			<div className="buttons">
				<button id="sortPricePerUnit" onClick={()=>handleSort('pricePerUnit')}>Sort by price per unit</button>
				<button id="sortPrice" onClick={()=>handleSort('price')}>Sort by price</button>
				<button id="sortDrinkItem" onClick={()=>handleSort('drinkItem')}>Sort by name</button>
			</div>
			<div className="cards-container">
				{cards.map((card, index) => (
					<Card cardData={card} key={index}/>
				))}
			</div>
		</div>
	);
}
