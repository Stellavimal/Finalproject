import axios from 'axios';
import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Addelection = () => {
const[election, setelection]=useState([])
const[addelection,setaddelection]=useState({electionname:"",electiondate:"",starttime:"",endtime:"", electiontype:""})

const adddata=async()=>{
    const response= await axios.post('/api/addelection/', addelection);
    console.log("response:",response.data)
}
const input = (event) => {
    const { name, value } = event.target;
    setaddelection({ ...addelection, [name]: value });
};
 const haandleSubmit=(event)=>{
    event.preventDefault()
 }
    return (<>

        <Form style={{ textAlign: 'center' }} onSubmit={haandleSubmit}>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={2}>
                        <Form.Label>Election Name</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Election Name"  name='electionname' onChange={input} required/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={2}>
                        <Form.Label>Eelection Date</Form.Label>
                    </Col>
                    <Col >
                        <Form.Control type="date" placeholder="Election Date" name='electiondate' onChange={input} required />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={2}>
                        <Form.Label>Start Time</Form.Label>
                    </Col>
                    <Col >
                        <Form.Control type="time" placeholder="Enter Time" name='starttime' onChange={input} required/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={2}>
                        <Form.Label>End Time</Form.Label>
                    </Col>
                    <Col >
                        <Form.Control type="time" placeholder="Enter Time" name='endtime' onChange={input} required/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={2}>
                        <Form.Label>Election Type</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select required name='electiontype' onChange={input}>
                            <option disabled>--select Election Type--</option>
                            <option>General Election</option>
                            <option>By-Election</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>
        
            <Button type="submit" onClick={adddata}>Submit</Button>

        </Form>

    </>);
}

export default Addelection;

