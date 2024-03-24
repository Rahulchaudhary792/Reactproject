import React from 'react'
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
	<div>
	   <div style={{"marginTop": "120px"}}>
		  <h1 style={{"color": "white", "textAlign": "center", "fontFamily": "courier"}}>Contact Us</h1>
		  <form style={{"textAlign": "center"}}>
				   <label style={{"color": "white", "fontFamily": "cursive"}}>Email</label>
				   <div>
					   <input type="text" style={{"width": "50%", "height": "20px", "marginTop": "20px", "marginBottom": "20px", "borderRadius": "5px"}}/>
				   </div>
				   <label style={{"color": "white", "fontFamily": "cursive"}}>Password</label>
				   <div>
					   <input type="password" style={{"width": "50%", "height": "20px", "marginTop": "20px", "borderRadius": "5px"}}/>
				   </div>
				   <div>
					   <button style={{"color": "white", "backgroundColor": "green", "marginTop": "30px", "marginBottom": "20px", "padding": "10px 50px", "borderRadius": "10px", "border": "none"}}><Link to="/" style={{"color": "white", "textDecoration": "none", "fontFamily": "sans-serif"}}>Submit</Link></button>
				   </div>
			   </form>
	  </div>
	</div>
  )
}

export default ContactUs
