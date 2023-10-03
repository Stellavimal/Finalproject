import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';
import Footer from "./footer";
import AdminNavbar from "./adminhome";

const Viewcandidate = () => {
    const [values, setValue] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/addcandidate/');
                setValue(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (<>
        <AdminNavbar />
        <div className='p-5'>
            <Table striped bordered hover variant='success'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Candidate Name</th>
                        <th>DoB</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Post Name</th>
                        {/* <th>Election Name</th> */}
                        <th>Party Name</th>
                    </tr>
                </thead>
                <tbody>
                    {values.map((item, index) => (
                        <tr key={item.cand_id}>
                            <td>{index + 1}</td>
                            <td>{item.nomineename}</td>
                            <td>{item.dob}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.phonenumber}</td>
                            <td>{item.address}</td>
                            <td>{item.postname}</td>
                            {/* <td>{item.election_name.Name}</td> */}
                            <td>{item.partyname}</td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
    </>);
}

export default Viewcandidate;