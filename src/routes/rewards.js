import express from 'express';
import { getRewardInfo } from '../controllers/rewardsController.js';
const router = express.Router();
router.get('/:address', getRewardInfo);
export default router;