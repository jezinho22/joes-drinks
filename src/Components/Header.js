import { useState } from "react";
import Form from "./Form";
import burgerMenu from "../Resources/burger-bar.png"
import Menu from "./Menu";

export default function Header({ handleSubmit, handleChange, form }) {
	const [showForm, setshowForm] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	function handleShowForm() {
		setshowForm(!showForm);
	}
	function handleShowMenu (){
		setShowMenu(!showMenu)
	}
	return (
		<header>
			<div className="headerRow">
				<h1>Joe's Student Drinking App</h1>
				<img src={burgerMenu} alt="hamburger menu icon" onClick={handleShowMenu}></img>
				{showMenu && (
					<Menu showForm={handleShowForm}/>
				)}
				{/* <button id="addName" onClick={handleShowForm}>
					Add item
				</button> */}
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
