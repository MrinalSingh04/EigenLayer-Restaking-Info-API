import { fetchRewards } from '../services/eigenlayerService.js';
import Reward from '../models/Reward.js';
export const getRewardInfo = async (req, res) => {
  try {
    const data = await fetchRewards(req.params.address);
    const existing = await Reward.findOneAndUpdate(
      { address: req.params.address },
      data,
      { upsert: true, new: true }
    );
    res.json(existing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
