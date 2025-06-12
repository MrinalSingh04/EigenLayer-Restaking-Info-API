import express from 'express';
import { getSlashHistory } from '../controllers/slashController.js';
const router = express.Router();
router.get('/', getSlashHistory);
export default router;