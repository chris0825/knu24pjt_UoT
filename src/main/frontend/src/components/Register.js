import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    axios.post('/api/users/register', { username, password, email })
      .then(response => {
        alert('Registration successful');
      })
      .catch(error => {
        console.error('There was an error registering!', error);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
