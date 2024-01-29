import { Router } from 'express';
import newsletterController from '../controllers/newsletter.controller';

const router = Router();

router.post('/:id/notifications', newsletterController.newsletterMailSend);
export default router;