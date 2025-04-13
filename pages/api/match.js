import { connectDB } from '@/lib/db';
import User from '@/models/User';

export default async function handler(req, res) {
  await connectDB();
  const { userId } = req.body;
  const user = await User.findById(userId);

  const matches = await User.find({
    _id: { $ne: userId },
    skillsOffered: { $in: user.skillsWanted },
    skillsWanted: { $in: user.skillsOffered }
  });

  res.status(200).json({ matches });
}
