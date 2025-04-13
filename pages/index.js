// /app/page.js (using App Router)
import { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';


const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/yourRoute', { name, email });
      console.log(response.data);
    } catch (error) {
      console.error('Error occurred:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Create a User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;

