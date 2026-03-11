import express from 'express';
import itemRoutes from './routes/utenteRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import 'dotenv/config';


const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.use('/api/utente', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;