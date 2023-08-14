import express from 'express';
import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';




const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);





export default router;