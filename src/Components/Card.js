import pintPot from "../Resources/pint.png";
export default function Card({ cardData }) {
	function alcoholUnits(){
		return ((cardData.volume * cardData.alcohol) / 1000).toFixed(1)
	}
	return (
		<div className="card">
			<h2 className="cardHead">{cardData.drinkItem}</h2>
			<h3>£{cardData.price}</h3>
			<p>Volume: {cardData.volume} ml</p>
			<p>Alcohol {cardData.alcohol} %</p>

			<h4>
				Units: {alcoholUnits} units
			</h4>
			<h4>
				Price per unit: £
				{(
					cardData.price /
					((cardData.volume * cardData.alcohol) / 1000)
				).toFixed(2)}{" "}
			</h4>
			{/* move this to a function, add a state variable for the pints */}
			{for (let i = 0; i < alcoholUnits / 2.2; i += 2.2 ){

			}}
			<img src={pintPot} />
		</div>
	);
}
