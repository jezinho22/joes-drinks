export default function Form() {
	return (
		<form>
			<fieldset>
				<legend>Input your item</legend>
				<input
					type="text"
					id="drinkItem"
					name="drinkItem"
					placeholder="Item name"
				/>
				<label for="drinkItem">Item name:</label>
				<input type="text" id="price" name="price" placeholder="Price" />
				<label for="price">Price in £</label>
				<input
					type="text"
					id="alcohol"
					name="alcohol"
					placeholder="Alcohol %"
				/>
				<label for="alcohol"></label>
				<input
					type="text"
					id="volume"
					name="volume"
					placeholder="Total volume of item"
				/>
				<label for="volume"></label>
			</fieldset>
		</form>
	);
}
