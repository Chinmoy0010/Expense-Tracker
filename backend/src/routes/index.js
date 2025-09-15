import express from 'express';
import { logEntry, getEntries, updateEntry, deleteEntry } from '../controllers/index.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Financial Entry Routes
router.post('/entries', authenticate, logEntry);
router.get('/entries', authenticate, getEntries);
router.put('/entries/:id', authenticate, updateEntry);
router.delete('/entries/:id', authenticate, deleteEntry);

// Additional routes can be added here

export default router;