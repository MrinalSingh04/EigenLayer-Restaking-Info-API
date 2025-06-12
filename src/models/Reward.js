import mongoose from 'mongoose';
const rewardSchema = new mongoose.Schema({
  address: String,
  totalRewards: String,
  breakdown: [
    {
      validator: String,
      amount: String,
      timestamp: String
    }
  ]
});
export default mongoose.model('Reward', rewardSchema);
