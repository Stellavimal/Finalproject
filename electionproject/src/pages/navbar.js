import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navelement";


const Navbar = () => {
    return (
        <>
<Nav>
<NavLogo to="/">
	Logo
</NavLogo>
<Bars />

<NavMenu>
	<NavLink 
	  to="/"
	  activeStyle={{ color:'black' }}
	>
		Home
	</NavLink>
	<NavLink 
	  to="/login"
	  activeStyle={{ color: 'black' }}
	>
		Login
	</NavLink>
	{/* <NavLink 
	  to="/contact" 
	  activeStyle={{ color: 'black' }}
	>
		Contact
	</NavLink>
	<NavLink
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
export default Navbar;