import { Request, Response } from 'express';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

export const tareas: Tarea[] = [];
let siguienteId = 1;

export const resetTareas = (): void => {
  tareas.length = 0;
  siguienteId = 1;
};

export const crearTarea = (req: Request, res: Response): Response => {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    return res.status(400).json({
      mensaje: 'El título y la descripción son obligatorios',
    });
  }

  const nuevaTarea: Tarea = {
    id: siguienteId++,
    titulo,
    descripcion,
    completada: false,
  };

  tareas.push(nuevaTarea);
  return res.status(201).json(nuevaTarea);
};
