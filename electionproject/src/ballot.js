import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Alert } from "react-bootstrap";
const Ballot = () => {
    const [partyvalue, setParty] = useState([])
    const [partyname, setPartyName] = useState("");
    const [partylogo, setPartyLogo] = useState("")
    console.log("partyvalue", partyvalue)
    const [values, setValue] = useState([])
    console.log("log", values)
    const [electionvalule, setElection] = useState()
    console.log("electionvalue", electionvalule)
    const [showInfo, setShowInfo] = useState(false);
    const [showThanksMessage, setShowThanksMessage] = useState(false);
    const [selectedNominee, setSelectedNominee] = useState("");
    console.log("selected nominee", selectedNominee)
    const [filteredPartyValue, setFilteredPartyValue] = useState([]);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [timeRange, setTimeRange] = useState({ startTime: '07:00:00', endTime: '14:31:00' });
    const Buttonclick = () => {
        setShowThanksMessage(true)

    }
    useEffect(() => {    
        async function fetchData() {
            try {
                const response = await axios.get('/api/addelection/');
                setValue(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function getData() {
            try {
                const response = await axios.get('/api/addparty/');
                setParty(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getData();

        fetchData();
    }, []);
    const handleNomineeChange = (e) => {
        const selectedElectionName = e.target.value;
        setSelectedNominee(selectedElectionName);
        const filteredPartyValue = partyvalue.filter((item) => String(item.party_id) === String(selectedElectionName));
        console.log("filter", filteredPartyValue)
        setFilteredPartyValue(filteredPartyValue);
        setShowInfo(true);
    };
    useEffect(() => {
        const isTimeWithinRange = () => {
            const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
            return currentTime >= timeRange.startTime && currentTime <= timeRange.endTime;
        };

        setButtonDisabled(!isTimeWithinRange());

        const intervalId = setInterval(() => {
            setButtonDisabled(!isTimeWithinRange());
        }, 60000);

        return () => clearInterval(intervalId);
    }, [timeRange]);
    return (<>
        <div className="container">
            {showThanksMessage && (
                <Alert variant="primary">
                   The End time "14:31:00", After this time you cannot vote
                </Alert>
            )}

            <form style={{ textAlign: 'center' }}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Election Name</label>
                    </div>
                    <div className="col-75">
                        <select
                            name="election"
                            required
                            onChange={handleNomineeChange}
                        >
                            <option value="">-- Select an Election --</option>
                            {partyvalue.map((item) => (
                                <option key={item.party_id} value={item.party_id}>
                                    {item.partynames.election} ({item.partynames.electiondate})
                                </option>
                            ))}
                        </select><br />
                    </div>
                </div>
            </form>
            {showInfo && (
                <div>
                    <div className='p-5'>
                        <Table striped bordered hover variant='success'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Candidate Name</th>
                                    <th>Post Name</th>
                                    <th>Party Name</th>
                                    <th>Party Logo</th>
                                    <th>Votting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPartyValue.map((item, index) => {
                                    return (
                                        <tr key={item.party_id}>
                                            <td>{index + 1}</td>
                                            <td>{item.partynames.Name}</td>
                                            <td>{item.partynames.PostName}</td>
                                            <td>{item.partynames.partyname}</td>
                                            <td><img src={item.partylogo} alt="Party Logo" width={85} height={85} /></td>
                                            <td><Button variant="danger" disabled={isButtonDisabled} onClick={Buttonclick}><i className="fas fa-vote-yea"></i></Button></td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </Table>
                    </div>
                </div>
            )}
        </div>
    </>);
}

export default Ballot;