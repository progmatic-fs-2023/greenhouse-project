import { Router } from 'express';
import adminController from '../controllers/admin.controller';

const router = Router();

router.post('/new', adminController.newQuestion);

router.get('/edit', adminController.getSelectedQuestions);

router.put('/edit/:id', adminController.editQuestionChanges);

export default router;
