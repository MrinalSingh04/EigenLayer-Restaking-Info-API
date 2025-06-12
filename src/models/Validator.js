import mongoose from 'mongoose';
const validatorSchema = new mongoose.Schema({
  address: String,
  stake: String,
  status: String
});
export default mongoose.model('Validator', validatorSchema);
