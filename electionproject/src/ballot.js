import { useState, useEffect } from "react";
import axios from "axios";
import { Table,Button } from "react-bootstrap";
const Ballot = () => {
    const [partyvalue, setParty] = useState([])
    const [values, setValue] = useState([])
    console.log("log", values)
    const [electionvalule, setElection] = useState({ election_name: "" })
    const [showInfo, setShowInfo] = useState(false);
    const [showThanksMessage, setShowThanksMessage] = useState(false);
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

    const toggleTable = () => {
        setShowInfo(!showInfo); // Toggle the showTable state
        
    };

    return (<>
        <div class="container">
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
                                {partyvalue.map((item, index) => {
                                    console.log(item.partynames); // Log the partynames object
                                    return (
                                        <tr key={item.party_id}>
                                            <td>{index + 1}</td>
                                            <td>{item.partynames ? item.partynames.Name : 'N/A'}</td>
                                            <td>{item.partynames ? item.partynames.PostName : 'N/A'}</td>
                                            <td>{item.partynames ? item.partynames.partyname : 'N/A'}</td>
                                            <td><img src={item.partylogo} alt="Party Logo" width={85} height={85} /></td>
                                            <td><Button variant="danger"><i className="fas fa-vote-yea" ></i></Button></td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </Table>
                    </div>
                </div>
            )}
            <form style={{ textAlign: 'center' }}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Election Name</label>
                    </div>
                    <div className="col-75">
                        <select
                            name="election_name"
                            required
                            onChange={toggleTable}
                        >
                            <option value="">-- Select an Election --</option>
                            {values.map((item) => (
                                <option key={item.electionid} value={item.electionid}>
                                    {item.electionname}
                                </option>
                            ))}
                        </select><br />
                    </div>
                </div>
            </form>
        </div>
    </>);
}

export default Ballot;