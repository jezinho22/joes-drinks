import "./Card.css";
import { useState, useEffect } from "react";

import pintPot from "../../Resources/pint.png";
import wineBottle from "../../Resources/wine-bottle01.png";

export default function Card({
	cardData,
	cardIndex,
	handleDelete,
	equivalent,
}) {
	// array of images to pass to the render
	const [equivalentArray, setEquivalentArray] = useState(
		equivalentDrinks(cardData, {
			image: pintPot,
			height: 24,
			alt: "pint icon",
			units: 2.2,
		})
	);

	// when equivalent changes ie select drink equivalent
	// or when card data changes re-render the equivalent images
	useEffect(() => {
		if (equivalent === "bottleWine") {
			const equivalentData = {
				drinkSrc: wineBottle,
				drinkAlt: "wine bottle",
				drinkUnits: 9,
				drinkHeight: 60,
			};
			setEquivalentArray(equivalentDrinks(cardData, equivalentData));
		} else if (equivalent === "pint") {
			const equivalentData = {
				drinkSrc: pintPot,
				drinkAlt: "pint of beer",
				drinkUnits: 2.2,
				drinkHeight: 24,
			};
			setEquivalentArray(equivalentDrinks(cardData, equivalentData));
		}
	}, [cardData, equivalent]);

	function equivalentDrinks(newCard, equivalentData) {
		const imageArray = [];
		// whole drinks
		const drinks = Math.floor(newCard.units / equivalentData.drinkUnits);
		for (let i = 0; i < drinks; i++) {
			imageArray.push({
				src: equivalentData.drinkSrc,
				alt: equivalentData.drinkAlt,
				height: equivalentData.drinkHeight,
				width: equivalentData.drinkHeight,
			});
		}
		// work out remainder as proportion of whole drink
		const partHeight =
			(equivalentData.drinkHeight *
				(newCard.units % equivalentData.drinkUnits)) /
			equivalentData.drinkUnits;
		imageArray.push({
			src: equivalentData.drinkSrc,
			alt: equivalentData.drinkAlt,
			height: partHeight, //`${partHeight}px`,
			width: equivalentData.drinkHeight,
		});
		return imageArray;
	}

	return (
		<div className="card" key={cardIndex}>
			<h2 className="cardHead">{cardData.drinkItem}</h2>

			<h3>£{cardData.price}</h3>
			<div className="cardInfo">
				<p>
					<span>Volume:</span>
					{cardData.volume} ml
				</p>
				<p>
					<span>Alcohol: </span>
					{cardData.alcohol} %
				</p>
				<p>{cardData.units} units</p>
				<p>{cardData.pricePerUnit} per unit</p>
			</div>

			<div className="drinks">
				{equivalentArray.map((item, index) => (
					<img
						className="equiv"
						src={item.src}
						alt={item.alt}
						key={index}
						style={{
							height: item.height,
							width: item.width,
							marginLeft: (item.width - 20) / -2,
							marginRight: (item.width - 20) / -2,
						}}
					/>
				))}
			</div>
			<button onClick={() => handleDelete(cardData.drinkItem)}>Delete</button>
		</div>
	);
}
