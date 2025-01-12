import { Router } from 'express';

import studentController from '../../controllers/Students/StudentController';
import studentLoginRequired from '../../middlewares/studentLoginRequired';

const router = Router();

router.get('/', studentLoginRequired, studentController.index);
router.post('/', studentController.store);

export default router;
