export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

const tareas: Tarea[] = [];
let siguienteId = 1;

export const resetTareas = (): void => {
  tareas.length = 0;
  siguienteId = 1;
};

export const obtenerTareas = (): Tarea[] => {
  return [...tareas];
};

export const crearTarea = (titulo: string, descripcion: string): Tarea => {
  const nuevaTarea: Tarea = {
    id: siguienteId++,
    titulo,
    descripcion,
    completada: false,
  };

  tareas.push(nuevaTarea);
  return nuevaTarea;
};
