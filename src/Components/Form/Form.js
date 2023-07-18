import "./Form.css"

import { useState, useEffect } from "react";

export default function Form({
	handleSubmit,
	handleChange,
	form,
	handleShowForm,
}) {
	//enable form to display multipack as volume
	const [multipack, setMultipack] = useState(false);
	const [multipackVolume, setMultipackVolume] = useState(0);
	// display additional form inputs
	function handleMultipack() {
		setMultipack(!multipack);
	}

	return (
		<form className="formShow">
			<div className="closeForm" onClick={handleShowForm}>
				X
			</div>
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
						placeholder={parseInt(form.multiCount) * parseInt(form.multiVolume) ? parseInt(form.multiCount) * parseInt(form.multiVolume) : "Volume (ml)"}
						className = {multipack ? "greyed-out" : "live"}
						disabled = {multipack}
						onChange={handleChange}
					/>
				
				<div className="checkBox">
					<label htmlFor="multipack">Is it a multi pack?</label>
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
