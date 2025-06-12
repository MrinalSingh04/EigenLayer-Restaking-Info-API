import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import restakersRoutes from './routes/restakers.js';
import validatorsRoutes from './routes/validators.js';
import rewardsRoutes from './routes/rewards.js';
import slashRoutes from './routes/slash.js';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);
app.use('/slash', slashRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));