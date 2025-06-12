import { fetchSlashHistory } from '../services/eigenlayerService.js';
import Slash from '../models/Slash.js';
export const getSlashHistory = async (req, res) => {
  try {
    const data = await fetchSlashHistory();
    await Slash.deleteMany();
    await Slash.insertMany(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
