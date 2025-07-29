import commentsRoutes from '../routes/comments.js';
import postsRoutes from '../routes/posts.js';
import userRoutes from '../routes/user.js';
import express from 'express';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  {
    path: '/posts',
    route: postsRoutes,
  },
{
    path: '/comments',
    route: commentsRoutes,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

