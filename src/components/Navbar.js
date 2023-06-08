import React,{ useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import { Reorder } from '@mui/icons-material'

function Navbar() {
	const [expandNavBar, setExpandNavBar] = useState(false);
	const location = useLocation();
	useEffect(()=>{
		setExpandNavBar(false)
	}, [location])
  return (
	<div className='navbar' id={expandNavBar ? "open" : "false"}>
		<div className="toggleButton">
			<button onClick={()=>{setExpandNavBar((prev) => !prev)}}>
				<Reorder/>
			</button>
		</div>
		<div className='links'>
			<Link  className='link' to="/"> Home </Link>
			<Link className='link' to="/Projects"> Projects </Link>
		</div>
	</div>
  )
}

export default Navbar