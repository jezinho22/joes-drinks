import pintPot from "../Resources/pint.png";

export default function Card({ cardData }) {
	function alcoholUnits() {
		return ((cardData.volume * cardData.alcohol) / 1000).toFixed(1);
	}
	function equivalentPints() {
		console.log("equiv");
		//whole pints
		let alcUnits = alcoholUnits();
		let pints = Math.floor(alcUnits / 2.2);
		// part pints as a proportion of 24px
		const pintHeight = 24;
		let partPint = (pintHeight * (alcUnits % 2.2)) / 2.2;
		let pintsArray = [
			{ src: "../Resources/pint.png", alt: "pint-glass", height: partPint },
		];
		for (let i = 0; i < pints; i++) {
			pintsArray.push({
				src: "../Resources/pint.png",
				alt: "pint-glass",
				height: 24,
			});
		}
		return pintsArray;
	}
	return (
		<div className="card">
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
				).toFixed(2)}{" "}
			</h4>
			{/* move this to a function, add a state variable for the pints */}
			{/* <p>That's the same as {equivalentPints()} pints</p> */}
			<img src={pintPot} alt="pint-glass" />
		</div>
	);
}
