import express from 'express';
import { registerApi } from '../controllers/user.js';

const router = express.Router();

router.get('/signup', registerApi)

export default router;
