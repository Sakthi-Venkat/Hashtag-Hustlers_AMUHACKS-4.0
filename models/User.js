import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  location: String,
  skillsOffered: [String],
  skillsWanted: [String]
});

export default mongoose.models.User || mongoose.model('User', userSchema);
