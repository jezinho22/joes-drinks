import "./Form.css";

import { useState} from "react";

export default function Form({
	handleSubmit,
	handleChange,
	form,
	handleShowForm,
	showForm,
	multipack,
	handleMultipack
}) {


	return (
		<form className={showForm} onSubmit={handleSubmit} >
			<div className="innerForm">
				<div className="inputsContainer">
				<p>Input your item</p>
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
						<label htmlFor="multiCount">Number in pack</label>

						<input
							className="multipack"
							name="multiCount"
							id="multiCount"
							placeholder="Number in pack"
							onChange={handleChange}
						/>
						<label htmlFor="multiVolume">Volume of one item</label>

						<input
							className="multipack"
							name="multiVolume"
							id="multiVolume"
							// placeholder="Volume (ml) of one item"
							onChange={handleChange}
						/>
					</fieldset>
				)}
					<div className="buttonContainer">
						<button type="submit">Submit</button>
						<button onClick={()=>handleShowForm("close")} >Cancel</button>
					</div>
				</div>
			</div>
		</form>
	);
}
