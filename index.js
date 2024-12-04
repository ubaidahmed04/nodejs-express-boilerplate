import express from 'express'
import dotenv from 'dotenv'
import { dbConnected } from './src/utils/dbConnected.js'
import routes from './src/routes/route.js'
import helmet from "helmet";
import { ENV } from './src/constants/index.js';
const app = express()

app.use(helmet());
app.use(express.json())


dotenv.config()
dbConnected()

app.use('/api',routes)


const port = ENV.PORT || 3000; // Environment variable ka use
app.listen(port, () => console.log(`Server is running on port ${port}`));

// multer for file upload
// nodemailer  email pr msg sent krne ke lye 