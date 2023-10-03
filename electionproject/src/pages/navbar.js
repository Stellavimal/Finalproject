import {Nav,NavLogo,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,}from "./navelement";
import './test.css'

const Navbars = () => {
    return (
        <>
<Nav>

<p className="glow-text">Election Management System</p>

<Bars />

<NavMenu>
	<NavLink 
	  to="/"
	  activeStyle={{ color:'black' }}
	>
		<b>Home</b>
	</NavLink>
	 <NavLink 
	  to="/login" 
	  activeStyle={{ color: 'black' }}
	>
		<b>Login</b>
	</NavLink>
	{/*<NavLink
	  to="/signin"
	  activeStyle={{ color: 'black' }}
	>
		Sign In
	</NavLink>
	<NavBtn>
		<NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
	</NavBtn> */}
</NavMenu>
</Nav> 
</>
 );
};
export default Navbars;