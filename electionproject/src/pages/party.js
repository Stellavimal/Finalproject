import { useState, useEffect } from "react";
import axios from "axios";

const Addparty = () => {
    const [candidates, setCandidates] = useState([]);
    console.log("xcvb",candidates)
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    console.log(selectedCandidate)
    const [partylogo, setPartylogo] = useState("");
   

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addcandidate/');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

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
        const selectedCand =  candidates.find((t) => t.cand_id === parseInt(selectedCandId));
        setSelectedCandidate(selectedCand);
        console.log("drop",selectedCand)
    };

    const handlePartyLogoChange = (event) => {
        setPartylogo(event.target.value);
    };

    return (
        <div>
            <label>Candidate Name:</label>
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
            <br />
            <label>Party Logo:</label>
            <input
                type="file"
                name="partylogo"
                onChange={handlePartyLogoChange}
            />
            <button onClick={updateRecord}>Submit</button>
        </div>
    );
};

export default Addparty;
