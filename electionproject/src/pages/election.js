import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import Footer from './footer'

const Addelection = () => {
    const [election, setelection] = useState([])
    const [addnewelection, setaddelection] = useState({ electionname: "", electiondate: "", electiontype: "", starttime: "", endtime: "", })
    const [validationError, setValidationError] = useState('');
    const [showModal, setShowModal] = useState(false); // pop up wondow
    const [values, setValue] = useState([])
    const toggleTable = () => {
        setShowModal(!showModal); // Toggle the showTable state
    };
    const adddata = async () => {
        if (!addnewelection.electionname) {
            setValidationError('Election Name is required.');
        } else if (new Date(addnewelection.electiondate) < new Date()) {
            setValidationError('Election Date cannot be in the past.');
        } else if (!addnewelection.electiontype) {
            setValidationError('Election Type is required.');
        } else if (!addnewelection.starttime) {
            setValidationError('Start Time is required.');
        } else if (!addnewelection.endtime) {
            setValidationError('End Time is required.');
        } else {
            setValidationError('');
            const response = await axios.post('/api/addelection/', addnewelection);
            setelection([...election, response.data])
            setaddelection({ electionname: "", electiondate: "", electiontype: "", starttime: "", endtime: "" })
            console.log("response:", response.data)
            alert("New Election added")
        }
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

        fetchData();
    }, []);
    const input = (event) => {
        const { name, value } = event.target;
        setaddelection({ ...addnewelection, [name]: value });
    };

    const isStartTimeLessThanEndTime = () => {
        if (addnewelection.starttime && addnewelection.endtime) {
            const startTimeObj = new Date(`2023-09-25T${addnewelection.starttime}`);
            const endTimeObj = new Date(`2023-09-25T${addnewelection.endtime}`);

            return startTimeObj < endTimeObj;
        }
        return true; // If either startTime or endTime is not provided, consider it valid.
    };
    const haandleSubmit = (event) => {
        event.preventDefault()
    }

    const isValid = isStartTimeLessThanEndTime();

    return (<>
        {!isValid && <p style={{ color: 'red' }}>Start time must be less than End time.</p>}
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}<br />
        <Button variant='primary' onClick={toggleTable}>
            <span style={{ color: 'white' }}>
                <i className="fas fa-eye" style={{ color: 'burlywood' }}></i>
                Previous Elections
            </span>
        </Button>

        <div class="container">
            <form style={{ textAlign: 'center' }} onSubmit={haandleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Election Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className="form-group mx-sm-3 mb-2" placeholder="Election Name" name='electionname' value={addnewelection.electionname} onChange={input} required /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Eelection Date:</label>
                    </div>
                    <div className="col-75">
                        <input type="date" className="form-group mx-sm-3 mb-2" placeholder="Election Date" name='electiondate' value={addnewelection.electiondate} onChange={input} required /><br />
                    </div></div>
                <div className="row">
                    <div className="col-25">
                        <label>Election Type:</label>
                    </div>
                    <div className="col-75">
                        <select required name='electiontype' value={addnewelection.electiontype} onChange={input} className="form-group mx-sm-3 mb-2">
                            <option value="" disabled selected>--select Election Type--</option>
                            <option value="GeneralElection">General Election</option>
                            <option value="By-Election">By-Election</option>
                        </select><br />
                    </div></div>
                <div className="row">
                    <div className="col-25">
                        <label>Start Time:</label>
                    </div>
                    <div className="col-75">
                        <input type="time" placeholder="Enter Time" name='starttime' className="form-group mx-sm-3 mb-2" value={addnewelection.starttime} onChange={input} required /><br />
                    </div></div>
                <div className="row">
                    <div className="col-25">
                        <label>End Time:</label>
                    </div>
                    <div className="col-75">
                        <input type="time" placeholder="Enter Time" name='endtime' className="form-group mx-sm-3 mb-2" value={addnewelection.endtime} onChange={input} required /><br />
                        {/* <Button type="submit" onClick={getdata}>get</Button> */}
                    </div></div>
                {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

                <Button variant="success" onClick={adddata}>Submit</Button>
            </form>
            {showModal && (
                <div className='p-5'>
                    <Table striped bordered hover variant='success'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Election Name</th>
                                <th>Election Date</th>
                                <th>Election Type</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((item, index) => (
                                <tr key={item.electionid}>
                                    <td>{index + 1}</td>
                                    <td>{item.electionname}</td>
                                    <td>{item.electiondate}</td>
                                    <td>{item.electiontype}</td>
                                    <td>{item.starttime}</td>
                                    <td>{item.endtime}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </div>
            )}
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />




    </>);
}

export default Addelection;

