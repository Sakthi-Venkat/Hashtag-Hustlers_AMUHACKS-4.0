import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.post('/api/match', { userId }).then(res => setMatches(res.data.matches));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Skill Matches</h2>
      {matches.length === 0 ? <p>No matches found yet.</p> :
        matches.map((user, i) => (
          <div key={i} className="border p-3 rounded mb-2">
            <h3 className="font-semibold">{user.name} ({user.location})</h3>
            <p><b>Offers:</b> {user.skillsOffered.join(', ')}</p>
            <p><b>Wants:</b> {user.skillsWanted.join(', ')}</p>
          </div>
        ))}
    </div>
  );
}
