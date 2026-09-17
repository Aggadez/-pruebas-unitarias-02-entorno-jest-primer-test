import { Request, Response } from 'express';
import * as tareasService from '../services/tareas.service';

export { resetTareas } from '../services/tareas.service';

export const obtenerTareas = (_req: Request, res: Response): Response => {
  const tareas = tareasService.obtenerTareas();
  return res.status(200).json(tareas);
};

export const crearTarea = (req: Request, res: Response): Response => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      mensaje: 'El título y la descripción son obligatorios',
    });
  }

  const nuevaTarea = tareasService.crearTarea(titulo, descripcion);
  return res.status(201).json(nuevaTarea);
};
