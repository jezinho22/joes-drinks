import { useState, useEffect } from "react";

export default function Form({ handleSubmit, handleChange, form }) {
	const [multipack, setMultipack] = useState(false);
	const [multipackVolume, setMultipackVolume] = useState(0);
	// display additional form inputs
	function handleMultipack() {
		setMultipack(!multipack);
	}
	// calculate total volume
	// try making changes to state at this level to get multipack into form and card volume
	useEffect(() => {
		setMultipackVolume(parseInt(form.multiCount) * parseInt(form.multiVolume));
	}, [form.multiVolume || form.multiCount]);

	function getMultipackVolume() {}
	return (
		<form className="formShow">
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
				<label htmlFor="volume">Volume in ml</label>
				<input
					type="text"
					id="volume"
					name="volume"
					placeholder="Total volume of item"
					onChange={handleChange}
					value={getMultipackVolume ? getMultipackVolume : 0}
				/>{" "}
				<div className="checkBox">
					<label htmlFor="multipack">Is it a multipack?</label>
					<input
						type="checkbox"
						id="multipack"
						name="multipack"
						value="multipack"
						onChange={handleMultipack}
					/>
				</div>
				{multipack && (
					<fieldset>
						<legend>Multipack</legend>
						<input
							className="multipack"
							name="multiCount"
							id="multiCount"
							placeholder="Number in pack"
							onChange={handleChange}
						/>
						<input
							className="multipack"
							name="multiVolume"
							id="multiVolume"
							placeholder="Volume (ml) of one item"
							onChange={handleChange}
						/>
					</fieldset>
				)}
				<button onClick={handleSubmit}>Submit</button>
			</fieldset>
		</form>
	);
}
