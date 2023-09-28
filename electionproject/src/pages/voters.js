const Voters = () => {
    return (<>
        <form>
            <label><b> Name:</b></label>
            <input type="text" name="name" className="first" placeholder='Name...' onChange={input} required /><br />
            <label><b>DOB:</b></label>
            <input type="date" name="dob" className="dob" placeholder='Date of Birth.....' onChange={input} required /><br />
            <label><b>Email:</b></label>
            <input type="email" name="email" className="email" placeholder='Email..'  onChange={input} required /><br />
            <label><b>Gender:</b></label>
            <input type="radio" name="gender" className="gender" value="male" checked={Newcandidatevalue.gender === 'male'} onChange={input} /><label>Male</label>
            <input type="radio" name="gender" className="gender" value="female" checked={Newcandidatevalue.gender === 'female'} onChange={input} /><label>Female</label>
            <input type="radio" name="gender" className="gender" value="others" checked={Newcandidatevalue.gender === 'others'} onChange={input} /><label>Others</label><br />
            <label><b>Phone Number:</b></label>
            <input type="number" name="phonenumber" className="phonenumber" placeholder='Phone NUmber..' onChange={input} required /><br />
            <label><b>Address:</b></label>
            <input type="text" name="addres" className="address" placeholder='Address..' onChange={input} required /><br />
            <label><b>Voter_id:</b></label>
            <input type="number" name="voter_no" className="voter_id" placeholder='Voter Id..' onChange={input} required /><br />
            <label><b>Adhar Number:</b></label>
            <input type="number" name="adhar_no" className="address" placeholder='Adhar number..' onChange={input} required /><br />
            <label><b>Password:</b></label>
            <input type="password" name="password" className="address" placeholder='password..' onChange={input} required /><br />
        </form>
    </>);
}

export default Voters;