import mongoose from 'mongoose'
import chalk from "chalk";
import { ENV } from '../constants/index.js';

export const dbConnected = async (req, res) =>{
    try {
        await mongoose.connect(ENV.mongodbURL)
        console.log(chalk.white.bgGreen("---- Connected to MongoDB ----"));
    } catch (error) {
        console.log(error)
    }
}