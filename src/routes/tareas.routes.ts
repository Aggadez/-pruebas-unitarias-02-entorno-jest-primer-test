import { Router } from 'express';
import { crearTarea, obtenerTareas } from '../controllers/tareas.controller';

const router = Router();

router.get('/tareas', obtenerTareas);
router.post('/tareas', crearTarea);

export default router;
