import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./Signup.css"
import { registerUser } from '../../services/userServices';

interface FormData {
  firstName: string,
  lastName:string,
  emailAddress: string,
  password: string,
  accountCreationDate:string
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName:'',
    emailAddress: '',
    password: '',
    accountCreationDate:''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    setFormData({
      ...formData, accountCreationDate : `${date.getFullYear}-${date.getMonth}-${date.getDate}`
    })
    registerUser(formData);
    setFormData({
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      accountCreationDate:''
    });
  };

  return (
    <div>
      <h1 id='sign-up-text'>Register</h1>
      <form id='signup-form' onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="signup-firstname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="first name"
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="signup-lastname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="last name"
          required
        />
        <label htmlFor="emailAddress">Email:</label>
        <input
          type="email"
          id="signup-email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
          required
        />

        <button id='signup-btn' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
