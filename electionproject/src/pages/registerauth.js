import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './test.css';
import { Button } from 'react-bootstrap';

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({ name: '', email: '', role: '', password: '', confpassword: '' });
  const [errors, setErrors] = useState({});



  function validateForm() {
    const newErrors = {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function submit(e) {
    e.preventDefault();
    if (validateForm()) {
      

      const isVoters = data.role.toLowerCase() === 'voters';
      const isCandidate = data.role.toLowerCase() === 'candidate';

      axios.post('/api/user/', {
        name: data.name,
        role: data.role,
        email: data.email,
        password: data.password,
        is_Candidate: isCandidate,
        is_Voters: isVoters,
      },{
        headers:{
          "Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzU4OTE2LCJpYXQiOjE2OTYzNTUzMTYsImp0aSI6ImY5NzkzNzRlYzhlMzQxMWNiZjAwZTcyNTRiNTU5ZWI0IiwidXNlcl9pZCI6MX0.BJvuyyyx3pLaFlpniHVBhDlOP9mb6RPdp4CrrNeTOKg`
        }
      }).then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.access);
        alert("Signin Succesfully")
        navigate("/login");

      }).catch((error) => {
        console.error('Error registering user:', error);
      });
    }
    else alert('fill all fields')
  }


  return (
    <div class="container">
      <form >
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Username</label>
          </div>
          <div className="col-75">
            <input type='text' className="form-input" name="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
          </div></div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="username">Email</label>
          </div>
          <div className="col-75">
            <input className="form-input" name="email" onChange={(e) => setData({ ...data, email: e.target.value })} type='email' />
          </div></div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="role">Role</label>
          </div>
          <div className="col-75">
            <select name="role" onChange={(e) => setData({ ...data, role: e.target.value })} >
              <option value="">...</option>
              <option value="Voters">Voters</option>
              <option value="candidate">Candidate</option>
            </select><br />
          </div></div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-75">
            <input className="form-input" type="password" name="password" onChange={(e) => setData({ ...data, password: e.target.value })} />
          </div></div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="confpassword">Confirm Password</label>
          </div>
          <div className="col-75">
            <input className="form-input" type="password" name="confpassword" onChange={(e) => setData({ ...data, confpassword: e.target.value })} />
          </div></div>
        {errors.username && <div className="error">{errors.username}</div>}
        {errors.role && <div className="error">{errors.role}</div>}
        {errors.password && <div className="error">{errors.password}</div>}
        {errors.confpassword && <div className="error">{errors.confpassword}</div>}

        <p style={{ textAlign: "center" }}>Already have a account <Link to='/Login' className="reglink" style={{ color: 'black' }}>Login</Link></p>
        <div style={{ textAlign: "center" }}> <Button onClick={submit} variant='success'>Register</Button></div>
      </form >
    </div>


  );
}

export default Register;