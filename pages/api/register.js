import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await connectDB();

  const { name, phone, password, location } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, phone, password: hashed, location });
  res.status(201).json({ message: 'User registered', user });
}
