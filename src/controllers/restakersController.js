import { fetchRestakers } from '../services/eigenlayerService.js';
import Restaker from '../models/Restaker.js';
export const getRestakers = async (req, res) => {
  try {
    const data = await fetchRestakers();
    await Restaker.deleteMany();
    await Restaker.insertMany(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};