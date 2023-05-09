export default function Form({ handleSubmit, handleChange }) {
	return (
		<form>
			<fieldset>
				<legend>Input your item</legend>
				<label htmlFor="drinkItem">Item name:</label>
				<input
					type="text"
					id="drinkItem"
					name="drinkItem"
					placeholder="Item name"
					onChange={handleChange}
				/>
				<label htmlFor="price">Price in £</label>
				<input
					type="text"
					id="price"
					name="price"
					placeholder="Price"
					onChange={handleChange}
				/>
				<label htmlFor="alcohol">% alcohol</label>
				<input
					type="text"
					id="alcohol"
					name="alcohol"
					placeholder="Alcohol %"
					onChange={handleChange}
				/>
				<label htmlFor="volume">Volume</label>
				<input
					type="text"
					id="volume"
					name="volume"
					placeholder="Total volume of item"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Submit</button>
			</fieldset>
		</form>
	);
}
