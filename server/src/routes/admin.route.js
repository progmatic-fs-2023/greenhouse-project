import { Router } from 'express';
import adminController from '../controllers/admin.controller';

const router = Router();

router.post('/new', adminController.newQuestion);

/* router.post('/edit', adminController.editQuestion); */

export default router;
