import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
  {
     origin: 'http://localhost:5173',
     credentials: true,
  }
)); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON bodies


app.use("/",productRoutes)

app.listen(PORT, () => {
  connectDB();  
  console.log(`Server is running on http://localhost:${PORT}`);
});


