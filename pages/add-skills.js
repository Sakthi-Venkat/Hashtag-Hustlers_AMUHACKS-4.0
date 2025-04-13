import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function AddSkills() {
  const [offered, setOffered] = useState('');
  const [wanted, setWanted] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    await axios.post('/api/add-skills', {
      userId,
      skillsOffered: offered.split(',').map(s => s.trim()),
      skillsWanted: wanted.split(',').map(s => s.trim()),
    });
    router.push('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Your Skills</h2>
      <textarea
        placeholder="Skills you offer (comma separated)"
        className="input mb-2 w-full"
        onChange={e => setOffered(e.target.value)}
      />
      <textarea
        placeholder="Skills you want to learn (comma separated)"
        className="input mb-2 w-full"
        onChange={e => setWanted(e.target.value)}
      />
      <button className="btn w-full" onClick={handleSubmit}>Save Skills</button>
    </div>
  );
}
