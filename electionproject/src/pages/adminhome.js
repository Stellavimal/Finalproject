import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,}from "./navelement";
import './test.css'

const AdminNavbar = () => {
    return (
        <>
<Nav>
<Bars />

<NavMenu>
	<NavLink 
	  to="/"
	  activeStyle={{ color:'black' }}
	>
		Home
	</NavLink>
	<NavLink 
	  to="/election"
	  activeStyle={{ color: 'black' }}
	>
		Add Election
	</NavLink>
	<NavLink 
	  to="/viewcandidate" 
	  activeStyle={{ color: 'black' }}
	>
		List of Candidates
	</NavLink>
	<NavLink
	  to="/addparty"
	  activeStyle={{ color: 'black' }}
	>
		Parties Details
	</NavLink>
    <NavLink
	  to="/viewvoter"
	  activeStyle={{ color: 'black' }}
	>
		Voters Details
	</NavLink>
    <NavLink
	  to="/result"
	  activeStyle={{ color: 'black' }}
	>
		Election Result
	</NavLink>
	<NavLink
	  to="/"
	  activeStyle={{ color: 'black' }}
	>
		Logout
	</NavLink>
</NavMenu>
</Nav> 
</>
 );
};
export default AdminNavbar;