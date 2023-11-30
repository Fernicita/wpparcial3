const supertest = require('supertest');
const app = require('../app'); // Asegúrate de importar correctamente tu aplicación express
const mongoose = require('mongoose');
const ReleaseBacklog = require('../models/releaseBacklog');

describe('Tests CRUD para Release Backlogs', () => {
    let releaseBacklogId;

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/testdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería crear un nuevo release backlog', async () => {
        const newReleaseBacklogData = {
            /* Proporcionar datos para crear un nuevo release backlog */
        };

        const response = await supertest(app)
            .post('/release-backlogs')
            .send(newReleaseBacklogData)
            .expect(200);

        releaseBacklogId = response.body.obj._id;
    });

    it('Debería obtener el release backlog recién creado', async () => {
        const response = await supertest(app)
            .get(`/release-backlogs/${releaseBacklogId}`)
            .expect(200);

        expect(response.body.obj._id).toBe(releaseBacklogId);
    });

    it('Debería reemplazar datos en el release backlog', async () => {
        const updatedReleaseBacklogData = {
            /* Proporcionar datos para reemplazar en el release backlog */
        };

        const response = await supertest(app)
            .put(`/release-backlogs/${releaseBacklogId}`)
            .send(updatedReleaseBacklogData)
            .expect(200);

        expect(response.body.msg).toBe('Release Backlog reemplazado correctamente');
    });

    it('Debería actualizar datos en el release backlog', async () => {
        const modifiedReleaseBacklogData = {
            /* Proporcionar datos para actualizar en el release backlog */
        };

        const response = await supertest(app)
            .patch(`/release-backlogs/${releaseBacklogId}`)
            .send(modifiedReleaseBacklogData)
            .expect(200);

        expect(response.body.msg).toBe('Release Backlog actualizado correctamente');
    });

    it('Debería eliminar el release backlog', async () => {
        const response = await supertest(app)
            .delete(`/release-backlogs/${releaseBacklogId}`)
            .expect(200);

        expect(response.body.msg).toBe('Release Backlog eliminado correctamente');
    });
});
