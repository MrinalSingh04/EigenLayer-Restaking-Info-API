import express from 'express';
import { getRestakers } from '../controllers/restakersController.js';
const router = express.Router();
router.get('/', getRestakers);
export default router;