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
		units:"",
		pricePerUnit:""
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
		} else {
			// this needs to be done further down, during submit form
			// instead of trying to mutate cards state
			let newOnes = cards.map(card => {
				return {...card, units:alcoholUnits(card), pricePerUnit:pricePerUnit(card)}
			})
			console.log(newOnes)
			setCards(newOnes)
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
	function alcoholUnits(newCard) {
		return ((newCard.volume * newCard.alcohol) / 1000).toFixed(1);
	}
	function pricePerUnit(newCard){
		return (newCard.price / ((newCard.volume * newCard.alcohol) / 1000)).toFixed(2)
	}
	// suubmit button for form
	function handleSubmit(event) {
		event.preventDefault();
		// make form into a new card and add to cards
		// add calculations to it
		let tempForm = {...form, units:alcoholUnits(form),pricePerUnit:pricePerUnit(form)}
		console.log(form)
		console.log(tempForm)
		setCards([...cards, {...tempForm}]);

		closeForm();

		// reset form
		event.target.reset();

	}
	function closeForm(){
		// update local storage with new card
		localStorage.setItem("drinksStorage", JSON.stringify(cards));		

		// this may not work - reset form or directly use set state here
		handleShowForm("close")
		callSetStateForm()
		// scroll down to view cards
		const viewCards = document.querySelector('#drink-cards')
		viewCards.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	function handleSort(sortBy){
		console.log(sortBy)
		let sorted = [...cards]
		if (sortBy == "drinkItem"){
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
