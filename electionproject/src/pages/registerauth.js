import React, { useState } from 'react';
import axios from 'axios';

const SignUp1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    roles: [], // Use an array to store selected roles
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkboxes separately
    if (type === 'checkbox') {
      const updatedRoles = [...formData.roles];
      if (checked) {
        updatedRoles.push(value);
      } else {
        const index = updatedRoles.indexOf(value);
        if (index !== -1) {
          updatedRoles.splice(index, 1);
        }
      }
      setFormData({ ...formData, roles: updatedRoles });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/', formData);
      console.log(response.data); 
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data); 
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="roles"
            value="staff"
            checked={formData.roles.includes('staff')}
            onChange={handleChange}
          />
          Staff
        </label>
        <label>
          <input
            type="checkbox"
            name="roles"
            value="voters"
            checked={formData.roles.includes('voters')}
            onChange={handleChange}
          />
          Voters
        </label>
        <label>
          <input
            type="checkbox"
            name="roles"
            value="candidate"
            checked={formData.roles.includes('candidate')}
            onChange={handleChange}
          />
          Candidate
        </label>

        <button type="submit">Register</button>
      </form>
      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

export default SignUp1;
