import { Link } from "react-router-dom";
import './test.css'
import { Button } from "react-bootstrap";

const Login = () => {
	return (  
		<> <div class="container">
		<form>
		  <div className="row">
			<div className="col-25">
			  <label for="fname">Voter ID</label>
			</div>
			<div className="col-75">
			  <input type="text" id="fname" name="firstname" placeholder="Voter Id.."/>
			</div>
			</div>
			<div className="row">
			<div className="col-25">
			  <label for="fname">Password</label>
			</div>
			<div className="col-75">
			  <input type="password" id="fname" name="firstname" placeholder="Password.."/>
			</div>
		  </div>
		  <div className="row">
		  <div className="col-25">
			  <label for="fname">Confirm Password</label>
			</div>
			<div className="col-75">
			  <input type="password" id="fname" name="firstname" placeholder="Password.."/>
			</div>
		  </div>
		  <div style={{textAlign:"center"}}><Button variant="success">Login</Button></div>
		  <div style={{textAlign:"center"}}><Link to="/voters">Don't have an Account? Singup</Link></div>
		  </form>
		  </div>

</>
	);
}
 
export default Login;