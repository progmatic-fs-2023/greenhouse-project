import { Router } from 'express';
import * as gameController from '../controllers/game.controller';

const router = Router();

router.post('/', gameController.quizQuestions);

router.post('/:id/answers', gameController.handleAnswer);

router.get('/quizmoduls', gameController.getTopics);
export default router;
