import { Router } from 'express';
import { crearTarea } from '../controllers/tareas.controller';

const router = Router();

router.post('/tareas', crearTarea);

export default router;
