import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
	<div style={{"position": "fixed" , "left": "0px", "right": "0px", "top": "0px"}}>
		<div style={{"display": "flex", "justifyContent": "space-around", "alignItems": "center", "backgroundColor": "black", "padding": "20px 10px"}}>
			<div>
				<Link to="/" className="navLink">Home</Link>
			</div>
			<div>
				<Link to="/about" className="navLink">About</Link>
			</div>
			<div>
				<Link to="/contactus" className="navLink">Contact us</Link>
			</div>
			<div>
				<Link to="/profile" className="navLink">Profile</Link>
			</div>
		</div>
	</div>
  )
}

export default Navbar
