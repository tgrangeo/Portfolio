import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import { Reorder } from '@mui/icons-material'

function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
	const [stylehome, setStylehome] = useState();
	const [styleproject, setStyleproject] = useState();

	const location = useLocation();

	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);

	function isCurrent() {
		console.log(location.pathname)
		if (location.pathname === '/') {
			setStylehome("underlinedTitle")
			setStyleproject("noneTitle")
			console.log("hh")
		}
		else {
			console.log("pp")
			setStylehome("noneTitle")
			setStyleproject("underlinedTitle")
		}
	}

	return (
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}
				>
					<Reorder />
				</button>
			</div>
			<div className="links">
				<Link to="/"> Home </Link>
				<Link to="/Projects"> Projects </Link>
			</div>
		</div>
	);
}

export default Navbar