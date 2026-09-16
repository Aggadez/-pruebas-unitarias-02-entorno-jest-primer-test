import request from 'supertest';
import app from '../src/app';
import { resetTareas } from '../src/controllers/tareas.controller';

describe('POST /tareas', () => {
  beforeEach(() => {
    resetTareas();
  });

  test('caso feliz: crea una tarea y responde 201', async () => {
    const payload = {
      titulo: 'Comprar leche',
      descripcion: 'Ir al supermercado',
    };

    const res = await request(app).post('/tareas').send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      id: 1,
      titulo: 'Comprar leche',
      descripcion: 'Ir al supermercado',
      completada: false,
    });
  });

  test('caso de error: payload incompleto responde 400', async () => {
    const res = await request(app)
      .post('/tareas')
      .send({ titulo: 'Sin descripción' });

    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      mensaje: 'El título y la descripción son obligatorios',
    });
  });
});
