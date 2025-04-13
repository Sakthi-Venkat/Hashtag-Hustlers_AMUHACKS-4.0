import { connectDB } from '@/lib/db';
import User from '@/models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await connectDB();

  const { userId, skillsOffered, skillsWanted } = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    { skillsOffered, skillsWanted },
    { new: true }
  );

  res.status(200).json({ message: 'Skills updated', user });
}
