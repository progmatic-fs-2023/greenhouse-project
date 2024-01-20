import { Router } from 'express';
import userDataController from '../controllers/userData.controller';
import authorization from '../middlewares/authorization.middleware';

const router = Router();

router.get('/:id', authorization, userDataController.getUserDatas);

export default router;
