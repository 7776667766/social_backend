import userRoutes from '../routes/user.js';
import express from 'express';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

