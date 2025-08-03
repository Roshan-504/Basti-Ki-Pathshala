import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { addNewRegisteration, deleteApplication, getApplication } from '../controllers/registrationController.js';

const router = express.Router();

router.post('/register', addNewRegisteration);

router.get('/applicants',authenticate,getApplication);

router.delete('/delete/:id',authenticate,deleteApplication)

export default router;