import { Router } from 'express';
import * as profileController from '../controllers/profile.controller';

const router = Router();

router.put('/account/:id', profileController.emailUpdate);

router.put('/password/edit/:id', profileController.passwordUpdate);

export default router;
