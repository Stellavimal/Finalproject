import { Nav, NavLogo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from "./navelement";
import './test.css'

const Canavbars = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink
                        to="/candidatehome"
                        activeStyle={{ color: 'black' }}
                    >
                        <b>Home</b>
                    </NavLink>
                    <NavLink
                        to="/candidate"
                        activeStyle={{ color: 'black' }}
                    >
                        <b>Nomination Form</b>
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activeStyle={{ color: 'black' }}
                    >
                        <b>Result</b>
                    </NavLink>

                    <NavLink
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >
                        <b>Logout</b>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Canavbars;