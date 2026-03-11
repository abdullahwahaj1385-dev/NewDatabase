import express from 'express';
import itemRoutes from './routes/utenteRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

// Routes
app.use('/api/utente', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;