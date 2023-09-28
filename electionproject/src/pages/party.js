import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Footer from "./footer";

const Addparty = () => {
    const [values, setValue] = useState([])
    const [candidates, setCandidates] = useState([]);
    console.log("xcvb", candidates)
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    console.log(selectedCandidate)
    const [partylogo, setPartylogo] = useState("");
    const [showModal, setShowModal] = useState(false); // pop up wondow
    const toggleTable = () => {
        setShowModal(!showModal); // Toggle the showTable state
    };

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

    const updateRecord = async () => {
        if (!selectedCandidate) {
            console.error('No candidate selected');
            return;
        }

        const updateData = {

            "partylogo": partylogo,

        }

        try {
            const response = await axios.patch(`/api/addcandidate/${selectedCandidate.cand_id}`, updateData);
            console.log('Candidate updated:', response.data);
        } catch (error) {
            console.error('Error updating candidate:', error);
        }
    };

    const handleCandidateChange = (event) => {
        const selectedCandId = event.target.value;
        const selectedCand = candidates.find((t) => t.cand_id === parseInt(selectedCandId));
        setSelectedCandidate(selectedCand);
        console.log("drop", selectedCand)
    };

    const handlePartyLogoChange = (event) => {
        setPartylogo(event.target.value);
    };

    return (
        <><br />
            <Button variant='primary' onClick={toggleTable}>
                <span style={{ color: 'white' }}>
                    <i className="fas fa-eye" style={{ color: 'burlywood' }}></i>
                    Candidates
                </span>
            </Button>
            <div class="container">
                <div className="row">
                    <div className="col-25">
                        <label>Candidate Name:</label>
                    </div>
                    <div className="col-75">
                        <select
                            name="nomineename"
                            onChange={handleCandidateChange}
                            required
                        >
                            <option value="">-- Select a Candidate --</option>
                            {candidates.map((candidate) => (
                                <option key={candidate.cand_id} value={candidate.cand_id}>
                                    {candidate.nomineename}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-25">
                        <label>Party Logo:</label></div>
                    <div className="col-75">
                        <input
                            type="file"
                            name="partylogo"
                            onChange={handlePartyLogoChange}
                        /></div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Button variant="success" onClick={updateRecord}>Submit</Button>
                </div>
            </div>
            {showModal && (
                <div className='p-5'>
                    <Table striped bordered hover variant='success'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Candidate Name</th>
                                <th> Post Name</th>
                                <th> Party Name</th>
                                <th>Election Name </th>
                                <th>Party Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((item, index) => (
                                <tr key={item.electionid}>
                                    <td>{index + 1}</td>
                                    <td>{item.partynames.Name}</td>
                                    <td>{item.partynames.PostName}</td>
                                    <td>{item.partynames.partyname}</td>
                                    <td>{item.partynames.election}</td>
                                    <td><img src={item.partylogo} alt="Party Logo" width={85} height={85} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </div>
            )}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
};

export default Addparty;
