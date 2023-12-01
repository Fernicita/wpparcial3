const supertest = require('supertest');
const app = require('../app'); // Asegúrate de importar correctamente tu aplicación Express
const mongoose = require('mongoose');
const SprintBacklog = require('../models/sprintBacklog');
const HistoriaUsuario = require('../models/userHistory');

describe('Tests CRUD para Sprint Backlogs', () => {
    let sprintBacklogId;

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/mongodb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería crear un nuevo sprint backlog', async () => {
        const newSprintBacklogData = {
            /* Proporcionar datos para crear un nuevo sprint backlog */
        };

        const response = await supertest(app)
            .post('/sprintBacklogs')
            .send(newSprintBacklogData)
            .expect(200);

        sprintBacklogId = response.body.obj._id;
    });

    it('Debería obtener el sprint backlog recién creado', async () => {
        const response = await supertest(app)
            .get(`/sprintBacklogs/${sprintBacklogId}`)
            .expect(200);

        expect(response.body.obj._id).toBe(sprintBacklogId);
    });

    it('Debería reemplazar datos en el sprint backlog', async () => {
        const updatedSprintBacklogData = {
            /* Proporcionar datos para reemplazar en el sprint backlog */
        };

        const response = await supertest(app)
            .put(`/sprintBacklogs/${sprintBacklogId}`)
            .send(updatedSprintBacklogData)
            .expect(200);

        expect(response.body.msg).toBe('Sprint Backlog actualizado correctamente');
    });

    it('Debería actualizar datos en el sprint backlog', async () => {
        const modifiedSprintBacklogData = {
            /* Proporcionar datos para actualizar en el sprint backlog */
        };

        const response = await supertest(app)
            .patch(`/sprintBacklogs/${sprintBacklogId}`)
            .send(modifiedSprintBacklogData)
            .expect(200);

        expect(response.body.msg).toBe('Sprint Backlog actualizado correctamente');
    });

    it('Debería eliminar el sprint backlog', async () => {
        const response = await supertest(app)
            .delete(`/sprintBacklogs/${sprintBacklogId}`)
            .expect(200);

        expect(response.body.msg).toBe('Sprint Backlog eliminado correctamente');
    });
});
