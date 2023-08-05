import "./Card.css"

import pintPot from "../../Resources/pint.png";
import { useState , useEffect} from "react";

export default function Card({ cardData, key }) {

	const [pintCompare, setPintCompare] = useState([])
	// set up pint comparison
	useEffect(() => {
	equivalentPints()
	}, [])

	function alcoholUnits() {
		return ((cardData.volume * cardData.alcohol) / 1000).toFixed(1);
	}
	function equivalentPints() {
		//whole pints
		let alcUnits = alcoholUnits();
		let pints = Math.floor(alcUnits / 2.2);
		// part pints as a proportion of 24px
		const pintHeight = 24;
		let partPint = (pintHeight * (alcUnits % 2.2)) / 2.2;
		let pintsArray = [
			{ src: "../Resources/pint.png", alt: "pint-glass", height: `${partPint}px` },
		];
		for (let i = 0; i < pints; i++) {
			pintsArray.unshift({
				src: "../Resources/pint.png",
				alt: "pint-glass",
				height: 24,
			});
		}
		setPintCompare(pintsArray)
	}
	return (
		<div className="card" key={key}>
			<h2 className="cardHead">{cardData.drinkItem}</h2>
			<h3>£{cardData.price}</h3>
			<p>Volume: {cardData.volume} ml</p>
			<p>Alcohol {cardData.alcohol} %</p>

			<h4>Units: {alcoholUnits()} units</h4>
			<h4>
				Price per unit: £
				{(
					cardData.price /
					((cardData.volume * cardData.alcohol) / 1000)
				).toFixed(2)}
			</h4>
			<div className = 'pints'>
			{pintCompare.map((item, index) => (
				<img src={pintPot} alt={item.alt} key={index} style={{ height : item.height }}/>			))}
			</div>
		</div>
	)}
