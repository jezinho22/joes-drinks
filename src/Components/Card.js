export default function Card({ cardData }) {
	return (
		<div>
			<h2>{cardData.drinkItem}</h2>
			<h3>£{cardData.price}</h3>
			<p>{cardData.volume} ml</p>
			<p>{cardData.alcohol} %</p>

			<h4>{((cardData.volume * cardData.alcohol) / 1000).toFixed(1)} units</h4>
			<h4>
				£
				{(
					cardData.price /
					((cardData.volume * cardData.alcohol) / 1000)
				).toFixed(2)}{" "}
				per unit
			</h4>
		</div>
	);
}
