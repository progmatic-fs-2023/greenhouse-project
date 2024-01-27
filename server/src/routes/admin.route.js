import { Router } from 'express';
import adminController from '../controllers/admin.controller';
import backendAuth from '../middlewares/backendAuth.middleware';

const router = Router();

router.post('/new', backendAuth, adminController.newQuestion);

router.get('/edit', backendAuth, adminController.getSelectedQuestions);

router.put('/edit/:id', backendAuth, adminController.editQuestionChanges);

router.get('/users', backendAuth, adminController.getSelectedUsers);

router.put('/users/:id', backendAuth, adminController.editUserRole);

export default router;
