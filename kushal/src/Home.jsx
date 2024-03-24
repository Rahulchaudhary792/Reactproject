import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from './Footer'
const Home = () => {
  return (
	<div style={{"marginTop": "90px"}}>
	   <div>
		   <h1 style={{"color": "white", "textAlign": "center", "fontFamily": "cursive"}}>Welcome to my Website</h1>
		   <h3 style={{"color": "lightgray", "textAlign": "center", "fontFamily": "cursive"}}>The Indian Constitution, adopted on January 26, 1950, is the supreme law of the land, guiding the governance of the world's largest democracy.
				It enshrines the principles of justice, liberty, equality, and fraternity, providing a framework for the functioning of the government and safeguarding the rights of its citizens.
				With its extensive provisions, the Constitution delineates the powers and responsibilities of the executive, legislative, and judicial branches, ensuring a system of checks and balances.
				Notably, it incorporates fundamental rights for all citizens, including the right to equality, freedom of speech, and the right to constitutional remedies.
				Through its robust framework, amendments, and judicial interpretations, the Indian Constitution has adapted to the evolving needs of its diverse population, serving as a beacon of democratic principles globally.
		   </h3>
		   <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "flexWrap": "wrap"}}>
			    <div style={{"width": "300px", "height": "70px", "backgroundColor": "grey", "marginTop": "20px", "marginLeft": "20px", "marginRight": "20px", "borderRadius": "10px", "border": "5px solid white"}}>
                     <p style={{"color": "white", "textAlign": "center", "marginTop": "25px", "fontFamily": "Arial"}}>Right to speak</p>
				</div>
				<div style={{"width": "300px", "height": "70px", "backgroundColor": "grey", "marginTop": "20px", "marginLeft": "20px", "marginRight": "20px", "borderRadius": "10px", "border": "5px solid white"}}>
				     <p style={{"color": "white", "textAlign": "center", "marginTop": "25px", "fontFamily": "Arial"}}>Right to live</p>
				</div>
				<div style={{"width": "300px", "height": "70px", "backgroundColor": "grey", "marginTop": "20px", "marginLeft": "20px", "marginRight": "20px", "borderRadius": "10px", "border": "5px solid white"}}>
				     <p style={{"color": "white", "textAlign": "center", "marginTop": "25px", "fontFamily": "Arial"}}>Right to study</p>
				</div>
		   </div>
		   <div>
			    <div><h2 style={{"color": "white", "fontFamily": "cursive", "textAlign": "center"}}>OUR SERVICES</h2></div>
				<div style={{"color": "lightgray", "textAlign": "center", "fontFamily": "cursive"}}>
                     <h3>The Indian Constitution, adopted on January 26, 1950, is the supreme law of the land, guiding the governance of the world's largest democracy.
						It enshrines the principles of justice, liberty, equality, and fraternity, providing a framework for the functioning of the government and safeguarding the rights of its citizens.
						With its extensive provisions, the Constitution delineates the powers and responsibilities of the executive, legislative, and judicial branches, ensuring a system of checks and balances.
						Notably, it incorporates fundamental rights for all citizens, including the right to equality, freedom of speech, and the right to constitutional remedies.
						Through its robust framework, amendments, and judicial interpretations, the Indian Constitution has adapted to the evolving needs of its diverse population, serving as a beacon of democratic principles globally.
                     </h3>
				</div>
		   </div>
	   </div>
	   <div>
		   <div>
			   <h1 style={{"color": "white", "fontFamily": "cursive", "textAlign": "center"}}>Contact Us</h1>
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
	   <Footer/>
	</div>
  )
}
export default Home