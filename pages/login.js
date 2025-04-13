import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await axios.post('/api/login', { phone, password });
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userId', res.data.user._id);
    router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="input mb-2 w-full" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
      <input className="input mb-2 w-full" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="btn w-full">Login</button>
    </div>
  );
}
