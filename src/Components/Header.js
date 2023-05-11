import { useState } from "react";
import Form from "./Form";

export default function Header({ handleSubmit, handleChange, form }) {
	const [showForm, setshowForm] = useState(false);
	function handleShowForm() {
		setshowForm(!showForm);
	}
	return (
		<header>
			<div className="headerRow">
				<h1>Joe's Student Drinking App</h1>
				<button id="addName" onClick={handleShowForm}>
					Add item
				</button>
			</div>
			{showForm && (
				<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					form={form}></Form>
			)}
		</header>
	);
}
