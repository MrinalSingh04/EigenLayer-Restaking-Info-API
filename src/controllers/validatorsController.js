import { fetchValidators } from '../services/eigenlayerService.js';
import Validator from '../models/Validator.js';
export const getValidators = async (req, res) => {
  try {
    const data = await fetchValidators();
    await Validator.deleteMany();
    await Validator.insertMany(data);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};