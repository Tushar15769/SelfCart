import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, default: '' },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, default: '' },
  password: { type: String, default: '' },
  googleId: { type: String, sparse: true },
  avatar: { type: String, default: '' },
  profileCompleted: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
