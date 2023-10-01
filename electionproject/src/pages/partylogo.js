import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Footer from "./footer";

const Partylogo = () => {
    const [newvalue, setNewvalue] = useState({ election: "", PostName: "", partyname: "", electiondate: "" })
    const [values, setValue] = useState([])
    console.log("partyvalue", values)
    const [candidates, setCandidates] = useState([]);
    console.log("candidates", candidates)
    // const [selectedCandidate, setSelectedCandidate] = useState(null);
    // console.log("dropvalue", selectedCandidate)
    const [partylogo, setPartylogo] = useState("");
    const [selectedNominee, setSelectedNominee] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addcandidate/');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function getData() {
            try {
                const response = await axios.get('/api/addparty/');
                setValue(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getData();
        fetchData();
    }, []);

    const handleAdd = async () => {
        const formData = new FormData();

        // Append the file to the FormData object
        formData.append("partylogo", partylogo);
      
        // Append other form data fields
        formData.append("partynames[Name]", selectedNominee);
        formData.append("partynames[PostName]", newvalue.PostName);
        formData.append("partynames[partyname]", newvalue.partyname);
        formData.append("partynames[election]", newvalue.election);
        formData.append("partynames[electiondate]", newvalue.electiondate);
      
        try {
          const response = await axios.post('/api/addparty/', formData);
          console.log('Data sent successfully:', response.data);
        } catch (error) {
          console.error('Error sending data:', error);
        }
    }

    const handlePartyLogoChange = (event) => {
        const file = event.target.files[0]; // Get the first file from the input
        setPartylogo(file);
    };
    const handleNomineeChange = (e) => {
        setSelectedNominee(e.target.value);
    };

    const getElectionName = () => {
        const selectedCandidate = candidates.find((candidate) => candidate.nomineename === selectedNominee);
        console.log("selected drop", selectedCandidate)

        if (selectedCandidate && selectedCandidate.election_name) {
            return selectedCandidate.election_name.Name;
        }
        return "";
    };
    const getPostname = () => {
        const selectedCandidate = candidates.find((candidate) => candidate.nomineename === selectedNominee);
        console.log("selected drop", selectedCandidate)

        if (selectedCandidate && selectedCandidate.election_name) {
            return selectedCandidate.postname;
        }
        return "";
    };
    const getPartname = () => {
        const selectedCandidate = candidates.find((candidate) => candidate.nomineename === selectedNominee);
        console.log("selected drop", selectedCandidate)

        if (selectedCandidate && selectedCandidate.election_name) {
            return selectedCandidate.partyname;
        }
        return "";
    };
    const getDate = () => {
        const selectedCandidate = candidates.find((candidate) => candidate.nomineename === selectedNominee);
        console.log("selected drop", selectedCandidate)

        if (selectedCandidate && selectedCandidate.election_name) {
            return selectedCandidate.election_name.date;
        }
        return "";
    };

    return (

        <div class="container">
            <form encType="multipart/form-data">
                <div className="row">
                    <div className="col-25">
                        <label><b>Candidate Name:</b></label>
                    </div>
                    <div className="col-75">
                        <select
                            name="Name"
                            onChange={handleNomineeChange}
                            required
                        >
                            <option value="">-- Select a Candidate --</option>
                            {candidates.map((candidate) => (
                                <option key={candidate.cand_id} value={candidate.nomineename}>
                                    {candidate.nomineename}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Election Name:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="election" value={getElectionName()} onChange={(e) => setNewvalue({ ...newvalue, [e.target.name]: e.target.value })} />
                    </div></div>
                <div className="row">
                    <div className="col-25">
                        <label><b>Post Name:</b></label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="PostName" value={getPostname()} onChange={(e) => setNewvalue({ ...newvalue, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><b>Party Name:</b></label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="partyname" value={getPartname()} onChange={(e) => setNewvalue({ ...newvalue, [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label><b>Election Date:</b></label>
                        </div>
                        <div className="col-75">

                            <input type="text" name="electiondate" value={getDate()} onChange={(e) => setNewvalue({ ...newvalue, [e.target.name]: e.target.value })} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label>Party Logo:</label></div>
                        <div className="col-75">
                            <input type="file" name="partylogo" onChange={handlePartyLogoChange} /></div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Button variant="success" onClick={handleAdd}>Submit</Button>
                </div>
            </form>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>

    );
};

export default Partylogo;
