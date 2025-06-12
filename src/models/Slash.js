import mongoose from 'mongoose';
const slashSchema = new mongoose.Schema({
  validator: String,
  amount: String,
  reason: String,
  timestamp: Number
});
export default mongoose.model('Slash', slashSchema);