export default function Form({ handleSubmit }) {
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
				<label htmlFor="drinkItem">Item name:</label>
				<input type="text" id="price" name="price" placeholder="Price" />
				<label htmlFor="price">Price in £</label>
				<input
					type="text"
					id="alcohol"
					name="alcohol"
					placeholder="Alcohol %"
				/>
				<label htmlFor="alcohol"></label>
				<input
					type="text"
					id="volume"
					name="volume"
					placeholder="Total volume of item"
				/>
				<label htmlFor="volume"></label>
				<input type="submit" onClick={handleSubmit} />
			</fieldset>
		</form>
	);
}
