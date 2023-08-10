import "./Card.css"
import { useState } from "react";

import pintPot from "../../Resources/pint.png";

export default function Card({ cardData, cardIndex, handleDelete }) {
const [pints, setPints] = useState(equivalentPints(cardData))

	function equivalentPints(newCard) {
		// create an array of image attributes to display
		let pintsArray = []
		// work out whole pints
		let pints = Math.floor(newCard.units / 2.2);
		for (let i = 0; i < pints; i++) {
			pintsArray.push({
				src: "../Resources/pint.png",
				alt: "pint-glass",
				height: 24,
			});
		}
		// work out remainder as proportion of 24px-high pint
		const pintHeight = 24;
		let partPint = (pintHeight * (newCard.units % 2.2)) / 2.2;
		pintsArray.push({
			  src: "../Resources/pint.png", 
			  alt: "pint-glass", 
			  height: `${partPint}px` 
			});
		return pintsArray
	}


	return (
		<div className="card" key={cardIndex}>
			<h2 className="cardHead">{cardData.drinkItem}</h2>

			<h3>£{cardData.price}</h3>
			<div className="cardInfo">
			<p><span>Volume:</span>{cardData.volume} ml</p>
			<p><span>Alcohol: </span>{cardData.alcohol} %</p>
			<p>{cardData.units} units</p>
			<p>{cardData.pricePerUnit} per unit</p>
			</div>

			<div className = 'pints'>
			{pints.map((item, index) => (
				
				<img src={pintPot} alt={item.alt} key={index} style={{ height : item.height }}/> ))}
			</div>
			<button onClick={()=>handleDelete(cardData.drinkItem)}>Delete</button>
		</div>
	)}
