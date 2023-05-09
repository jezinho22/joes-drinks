import { useState } from "react";
import Form from "./Form";

export default function Header({ handleSubmit, handleChange }) {
	const [showForm, setshowForm] = useState(false);
	function handleShowForm() {
		setshowForm(!showForm);
	}
	return (
		<div>
			<h1>Joe's Student Drinking App</h1>
			<button id="addName" onClick={handleShowForm}>
				Add item
			</button>
			{showForm && (
				<Form handleSubmit={handleSubmit} handleChange={handleChange}></Form>
			)}
		</div>
	);
}
