import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import DatePicker from 'react-datepicker';

const Candidate = () => {
    const [dobvalue, setDob] = useState('')
    const [Election, setElection] = useState([])
    const [Candidatevalue, setCandidatevalue] = useState([])
    const [Newcandidatevalue, setNewcandidatevalue] = useState({
        nomineename: "",
        postname: "",
        dob: "",
        age: "",
        gender: "",
        qualification: "",
        email: "",
        phonenumber: "",
        address: "",
        election_name: "",
        partyname: ""
    });
    const handleAdd = async () => {
        const electionId = parseInt(Newcandidatevalue.election_name);
        const newCandidate = {
            ...Newcandidatevalue,
            election_name: electionId, // Ensure it's an integer
        };
        const response = await axios.post('/api/addcandidate/', newCandidate)
        setCandidatevalue([...Candidatevalue, response.data])
        setNewcandidatevalue({
            nomineename: "",
            postname: "",
            dob: "",
            age: "",
            gender: "",
            qualification: "",
            email: "",
            phonenumber: "",
            address: "",
            election_name: "",
            partyname: ""
        })
        console.log("response:", response.data)
        alert("New Election added")

    }
    const input = (event) => {
        const { name, value } = event.target;
        setNewcandidatevalue({ ...Newcandidatevalue, [name]: value });
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addelection/');
                setElection(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);
    // const validateForm = () => {
    //     const validationErrors = {};

    //     if (Newcandidatevalue.nomineename.trim() === '') {
    //         validationErrors.nomineename = 'Candidate name is required';
    //     }
    //     if (Newcandidatevalue.postname.trim() === '') {
    //         validationErrors.postname = 'Postname is required';
    //     }
    //     if (Newcandidatevalue.dob.trim() === '') {
    //         validationErrors.dob = 'DoB is required';
    //     }
    //     if (Newcandidatevalue.age.trim() === '') {
    //         validationErrors.age = 'Age is required';
    //     }
    //     if (Newcandidatevalue.qualification.trim() === '') {
    //         validationErrors.qualification = 'Qualification is required';
    //     }
    //     if (Newcandidatevalue.email.trim() === '') {
    //         validationErrors.email = 'Email is required';
    //     }
    //     if (Newcandidatevalue.phonenumber.trim() === '') {
    //         validationErrors.phonenumber = 'Phonenumber is required';
    //     }
    //     if (Newcandidatevalue.address.trim() === '') {
    //         validationErrors.address = 'Address is required';
    //     }
    //     if (Newcandidatevalue.partyname.trim() === '') {
    //         validationErrors.partyname = 'Party Name is required';
    //     }

    //     return validationErrors;
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        // const validationErrors = validateForm();

        // if (Object.keys(validationErrors).length > 0) {
        //     setErrors(validationErrors);
        //   } else {
        //     // Form is valid, you can proceed with form submission
        //     handleAdd();
        //   }
    }
    const handleDobChange = (event) => {
        const dobValue = event.target.value; // Get the date value from the event
    
        // Create a date object from the input value
        const dobDate = new Date(dobValue);
    
        // Check if the date is valid
        if (!isNaN(dobDate.getTime())) {
            // Format the date in "YYYY-MM-DD" format
            const formattedDate = dobDate.toISOString().split('T')[0];
            
            // Calculate age
            const currentDate = new Date();
            const ageInMilliseconds = currentDate - dobDate;
            const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    
            // Set the formatted date and age in the state
            setNewcandidatevalue({
                ...Newcandidatevalue,
                dob: formattedDate,
                age: ageInYears.toString()
            });
        } else {
            // Handle invalid date input here if needed
            console.error('Invalid date input:', dobValue);
        }
    };
    
    
    return (<>
        <h2 style={{ textAlign: 'center' }}>Nomination Form </h2>

        <form onSubmit={handleSubmit}>
            <label><b>Candidate Name:</b></label>
            <input type="text" name="nomineename" className="first" placeholder='Name...' value={Newcandidatevalue.nomineename} onChange={input} required /><br />

            <label><b>Post Name:</b></label>
            <input type="text" name="postname" className="postname" placeholder='Post Name...' value={Newcandidatevalue.postname} onChange={input} required /><br />

            <label><b>DOB:</b></label>
            <input type="date" name="dob" className="dob" placeholder='Date of Birth.....' onChange={(event) => { input(event); handleDobChange(event); }} required /><br />

            <label><b>Age:</b></label>
            <input type="Number" name="age" className="age" placeholder='Age..' value={Newcandidatevalue.age} onChange={input} required /><br />

            <label><b>Gender:</b></label>
            <input type="radio" name="gender" className="gender" value="male" checked={Newcandidatevalue.gender === 'male'} onChange={input} /><label>Male</label>
            <input type="radio" name="gender" className="gender" value="female" checked={Newcandidatevalue.gender === 'female'} onChange={input} /><label>Female</label>
            <input type="radio" name="gender" className="gender" value="others" checked={Newcandidatevalue.gender === 'others'} onChange={input} /><label>Others</label><br />
            <label><b>Qualification:</b></label>
            <input type="text" name="qualification" className="quali" placeholder='Qualification..' value={Newcandidatevalue.qualification} onChange={input} required /><br />

            <label><b>Email:</b></label>
            <input type="email" name="email" className="email" placeholder='Email..' value={Newcandidatevalue.email} onChange={input} required /><br />

            <label><b>Phone Number:</b></label>
            <input type="number" name="phonenumber" className="phonenumber" placeholder='Phoneno..' pattern="[0-9]{10}" value={Newcandidatevalue.phonenumber} onChange={input} required /><br />

            <label><b>Parmanent Address:</b></label>
            <input type="text" name="address" className="address" placeholder='Address..' value={Newcandidatevalue.address} onChange={input} required /><br />

            <label><b>Election Name</b></label>
            <select
                // Use an empty string as the default value
                onChange={input}
                name="election_name"
                required
            >
                <option value="">-- Select an Election --</option>
                {Election.map((election) => (
                    <option key={election.id} value={election.id ? election.id.toString() : ''}>
                        {election.electionname}
                    </option>
                ))}
            </select><br />
            <label><b>Party Name</b></label>
            <input type="text" name="partyname" className="partyname" placeholder='Party Name..' value={Newcandidatevalue.partyname} onChange={input} required /><br />

            <label><b>Declaration:</b></label>
            <label> If anything found incorrect, then my candidature for the above-mentioned post shall be cancelled.</label> <br />
            <label><input type="checkbox" required /> Agree</label>
            <label><input type="checkbox" required /> Disagree</label><br />
            <Button variant='success' onClick={handleAdd}>Submit</Button>
        </form>

    </>
    );
}

export default Candidate;