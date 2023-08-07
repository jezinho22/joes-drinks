import "./Card.css"
import { useState } from "react";

import pintPot from "../../Resources/pint.png";

export default function Card({ cardData, cardIndex }) {

	return (
		<div className="card" key={cardIndex}>
			<h2 className="cardHead">{cardData.drinkItem}</h2>
			<h3>£{cardData.price}</h3>
			<p>Volume: {cardData.volume} ml</p>
			<p>Alcohol {cardData.alcohol} %</p>

			<h4>Units: {cardData.units} units</h4>
			<h4>Price per unit: {cardData.pricePerUnit}</h4>

			<div className = 'pints'>
			{cardData.pintEquivalent.map((item, index) => (
				
				<img src={pintPot} alt={item.alt} key={index} style={{ height : item.height }}/> ))}
			</div>
		</div>
	)}
