import { useState,useEffect } from "react";
import axios from "axios";


const Addparty = () => {
    const[Partyvalue,setPartyvalue]=useState([])
    const [Newpartyvale, setNewpartyvale] = useState({
        partynames: "",
        electionname:""
    });
    const input = (event) => {
        const { name, value } = event.target;
        setNewpartyvale({ ...Newpartyvale, [name]: value });
    };
    const adddate=async()=>{
        const response = await axios.post('/api/party/', Newpartyvale)
        console.log("Add Date",response.data)
        setPartyvalue([...Partyvalue, response.data])
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/party/');
                setPartyvalue(response.data);
                console.log("getdata",response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (<>
        <form>
            <label><b>Candidate Name:</b></label>
            <select
                // Use an empty string as the default value
                onChange={input}
                name="partynames"
                required
            >
                <option value="">-- Select an Candidate Name --</option>
                {Partyvalue.map((item) => (
                    <option key={item.id} value={item.id ? item.id.toString() : ''}>
                        {item.partynames.Name}
                    </option>
                ))}
                </select><br/>
                {Partyvalue.map((item) => (
                    <>
                     <label><b>Election Name:</b></label>
                     <input type="text" name="electionname"  placeholder='Election Name..'  onChange={input} required /><br />
                     <label><b>Party Name:</b></label>
                     <input type="text" name="partyname"  placeholder='Election Name..'  onChange={input} required /><br />
                     <label><b>Post Name:</b></label>
                     <input type="text" name="postname"  placeholder='Election Name..'  onChange={input} required /><br />
                     <label><b>Select PartyLogo :</b></label>
                     <input type="file" name="party"  placeholder='Election Name..'  onChange={input} required /><br />
                   
                     </>
                ))}
            
           
            <button onClick={adddate}>Submit</button>
        </form>
    </>);
}

export default Addparty;