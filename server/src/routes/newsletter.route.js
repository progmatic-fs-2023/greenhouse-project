import { Router } from 'express';
import newsletterController from '../controllers/newsletter.controller';

const router = Router();

router.post('/notifications', newsletterController.newsletterMailSend);
export default router;