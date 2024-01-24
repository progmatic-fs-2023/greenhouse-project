import { Router } from 'express';
import * as profileController from '../controllers/profile.controller';

const router = Router();

router.put('/account/:id', profileController.userDataUpdate);

router.put('/password/:id', profileController.passwordUpdate);

router.delete('/account/:id', profileController.destroyUser);

export default router;
