import { Router } from 'express';
import * as gameController from '../controllers/game.controller';

const router = Router();

router.get('/', gameController.quizQuestions);

router.post('/:id/answers', gameController.handleAnswer);
export default router;
