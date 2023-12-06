import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./Signup.css"

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here using the formData
    // console.log('Form submitted:', formData);
    // Reset the form after submission if needed
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h1 id='sign-up-text'>Register</h1>
      <form id='signup-form' onSubmit={handleSubmit}>
        <label htmlFor="username">Full Name:</label>
        <input
          type="text"
          id="signup-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          value={formData.email}
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
