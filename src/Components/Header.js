import { useState } from "react";
import Form from "./Form";
import burgerMenu from "../Resources/burger-bar.png";
import Menu from "./Menu";

export default function Header({
	handleSubmit,
	handleChange,
	form,
	callSetStateForm,
}) {
	const [showForm, setshowForm] = useState(false);
	const [showMenu, setShowMenu] = useState("menu-close");

	function handleShowForm() {
		setshowForm(!showForm);
		setShowMenu("menu-close");
		callSetStateForm();
	}

	function handleShowMenu(instruction) {
		setShowMenu(instruction);
	}

	return (
		<header>
			<div className="headerRow">
				<h1>Joe's Student Drinking App</h1>
				<img
					src={burgerMenu}
					alt="hamburger menu icon"
					onClick={() => handleShowMenu("menu-open")}></img>
				<Menu
					showMenu={showMenu}
					handleShowMenu={handleShowMenu}
					handleShowForm={handleShowForm}
				/>
				{/* <button id="addName" onClick={handleShowForm}>
					Add item
				</button> */}
			</div>
			{showForm && (
				<Form
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					form={form}
					handleShowForm={handleShowForm}></Form>
			)}
		</header>
	);
}
