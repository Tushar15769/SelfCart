import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import errorHandler from './utils/errorHandler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '.env') });

const app = express();

app.use(cors({ origin: ['http://localhost:5173', 'https://self-cart.vercel.app'], credentials: true }));
// Parse JSON bodies manually with raw body capture for debugging
app.use(express.text({ type: 'application/json' }));
app.use((req, res, next) => {
  if (typeof req.body === 'string') {
    if (req.body.length === 0) {
      req.body = {};
      next();
      return;
    }
    try {
      req.body = JSON.parse(req.body);
    } catch (err) {
      console.error('[Body Parse Error]');
      console.error('  Content-Type:', req.headers['content-type']);
      console.error('  Raw body string:', req.body);
      console.error('  Raw body hex:', Buffer.from(req.body, 'utf8').toString('hex'));
      console.error('  Error:', err.message);
      next(err);
      return;
    }
  }
  next();
});
app.use(cookieParser());

app.use('/api/auth', authRoutes);

// DEBUG: Log SyntaxError stack before passing to error handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.message.includes('JSON')) {
    console.error('[SyntaxError Stack]');
    console.error(err.stack);
    console.error('[Request Headers]');
    const h = { ...req.headers };
    if (h.cookie) h.cookie = '(redacted)';
    console.error(JSON.stringify(h, null, 2));
  }
  next(err);
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
