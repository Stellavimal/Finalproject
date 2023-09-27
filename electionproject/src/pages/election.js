import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Addelection = () => {
    const [election, setelection] = useState([])
    const [addnewelection, setaddelection] = useState({ electionname: "", electiondate: "", electiontype: "", starttime: "", endtime: "", })
    const [validationError, setValidationError] = useState('');

    const adddata = async () => {
        const response = await axios.post('/api/addelection/', addnewelection);
        setelection([...election, response.data])
        setaddelection({ electionname: "", electiondate: "", electiontype: "", starttime: "", endtime: "" })
        console.log("response:", response.data)
        alert("New Election added")
    }
    // const getdata=async()=>{
    //     const response1= await axios.get('/api/addelection/');
    //     console.log("response:",response1.data)
    // }
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
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <form style={{ textAlign: 'center' }} onSubmit={haandleSubmit}>
            <label>Election Name:</label>
            <input type="text" className="form-group mx-sm-3 mb-2" placeholder="Election Name" name='electionname' value={addnewelection.electionname} onChange={input} required /><br />
            <label>Eelection Date:</label>
            <input type="date" className="form-group mx-sm-3 mb-2" placeholder="Election Date" name='electiondate' value={addnewelection.electiondate} onChange={input} required /><br />
            <label>Election Type:</label>
            <select required name='electiontype' value={addnewelection.electiontype} onChange={input} className="form-group mx-sm-3 mb-2">
                <option value="" disabled selected>--select Election Type--</option>
                <option value="GeneralElection">General Election</option>
                <option value="By-Election">By-Election</option>
            </select><br />
            <label>Start Time:</label>
            <input type="time" placeholder="Enter Time" name='starttime' className="form-group mx-sm-3 mb-2" value={addnewelection.starttime} onChange={input} required /><br />
            <label>End Time:</label>
            <input type="time" placeholder="Enter Time" name='endtime' className="form-group mx-sm-3 mb-2" value={addnewelection.endtime} onChange={input} required /><br />
            {/* <Button type="submit" onClick={getdata}>get</Button> */}
            <Button variant="success" onClick={adddata}>Submit</Button>
        </form>


    </>);
}

export default Addelection;

