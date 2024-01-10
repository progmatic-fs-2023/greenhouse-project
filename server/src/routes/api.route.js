import { Router } from 'express';
import gameRouter from './game.route';
import authRouter from './auth.route';
import adminRouter from './admin.route';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});
router.use('/game', gameRouter);

router.use('/auth', authRouter);

router.use('/admin', adminRouter);

export default router;
