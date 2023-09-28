import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Voters = () => {
    const [votersdata, setVotersdata] = useState([])
    const [newvoters, setNewvoters] = useState({ name: "", dob: "", email: "", gender: "", phonenumber: "", address: "", voter_no: "", aadhar_number: "", password: "" })
    const adddata = async () => {
        // if (
        //     !newvoters.name ||
        //     !newvoters.email ||
        //     !newvoters.gender ||
        //     !newvoters.phonenumber ||
        //     !newvoters.address ||
        //     !newvoters.voter_no ||
        //     !newvoters.adhar_no ||
        //     !newvoters.password
        // ) {
        //     alert('Please fill in all the fields.');
        //     return; 
        // }
        const dobYear = new Date(newvoters.dob).getFullYear();
        const currentYear = new Date().getFullYear();
    
        if (dobYear > currentYear - 18) {
            alert('You must be at least 16 years old to register.');
            return; 
        }
        try {
            const response = await axios.post('/api/addvoters/', newvoters);
            setVotersdata([...votersdata, response.data]);
            setNewvoters({
                name: '',
                dob: '',
                email: '',
                gender: '',
                phonenumber: '',
                address: '',
                voter_no: '',
                aadhar_number: '',
                password: '',
            });
            console.log('response:', response.data);
            alert('New Voters added');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };
    
    const input = (event) => {
        const { name, value } = event.target;
        setNewvoters({ ...newvoters, [name]: value });
       
    };

    return (<>
        <div class="container">
            <form><br/>
                <h3 style={{textAlign:'center'}}>REGISTRATION FORM</h3>
                <br/>
                <div className="row">
                    <div className="col-25">
                        <label><b> Name:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="name" placeholder='Name...' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>DOB:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="date" name="dob" placeholder='Date of Birth.....' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Email:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="email" name="email" placeholder='Email..' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Gender:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="radio" name="gender" value="male" checked={newvoters.gender === 'male'} onChange={input} /><label>Male</label>
                        <input type="radio" name="gender" value="female" checked={newvoters.gender === 'female'} onChange={input} /><label>Female</label>
                        <input type="radio" name="gender" value="others" checked={newvoters.gender === 'others'} onChange={input} /><label>Others</label><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Phone Number:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="number" name="phonenumber" placeholder='Phone NUmber..' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Address:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="address" placeholder='Address..'  onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Voter_id:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="voter_no" placeholder='Voter Id..' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Adhar Number:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="number" name="aadhar_number" placeholder='Adharnumber..' onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Password:</b></label></div>
                    <div className="col-75">
                        <input type="password" name="password" placeholder='password..' onChange={input} required /><br />
                    </div>
                </div>
            </form>

        </div ><br/><div style={{textAlign:'center'}}><Button variant="success" onClick={adddata}>Register</Button></div>
        <div style={{textAlign:'right'}}> <Link to="/login">Go Back</Link></div>
    </>
    );
}

export default Voters;