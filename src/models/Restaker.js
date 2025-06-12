import mongoose from 'mongoose';
const restakerSchema = new mongoose.Schema({
  user: String,
  amount: String,
  validator: String
});
export default mongoose.model('Restaker', restakerSchema);