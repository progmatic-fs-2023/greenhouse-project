import { Router } from 'express';
import * as profileController from '../controllers/profile.controller';

const router = Router();

router.get('/profile/account', profileController.getUserEmail);

router.get('/profile', profileController.getUserCreationDate);

export default router;