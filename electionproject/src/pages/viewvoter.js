import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';

const Viewvotersdetails = () => {
    const [values, setValue] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addvoters/');
                setValue(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (<div className='p-5'>
        <Table striped bordered hover variant='success'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Voters Name</th>
                    <th>DoB</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Voter No</th>
                    <th>AAdhar Number</th>
                    
                </tr>
            </thead>
            <tbody>
            {values.map((item, index) => (
                        <tr key={item.voter_id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.dob}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>                         
                            <td>{item.phonenumber}</td>
                            <td>{item.address}</td>
                            <td>{item.voter_no}</td>
                            <td>{item.aadhar_number}</td>    
                        </tr>
                    ))}
             
            </tbody>
        </Table>
    </div>);
}
 
export default Viewvotersdetails;