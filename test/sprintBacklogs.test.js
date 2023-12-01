const supertest = require('supertest');
const app = require('../app'); // Asegúrate de importar correctamente tu aplicación Express
const mongoose = require('mongoose');
const SprintBacklog = require('../models/sprintBacklog');
const HistoriaUsuario = require('../models/userHistory');


let token;
beforeAll((done) => {
    supertest(app)
        .post("/login")
        .send({ "email": "dev@dev.com", "password": "dev" })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            console.log("Res res res", res.body)
            token = res.body.obj;
            done();
        });
});

describe('Tests CRUD para Sprint Backlogs', () => {
    let sprintBacklogId;


    it('Debería crear un nuevo sprint backlog', async () => {
        const newSprintBacklogData = {
            /* Proporcionar datos para crear un nuevo sprint backlog */
        };

        const response = await supertest(app)
            .post('/sprintBacklogs')
            .send(newSprintBacklogData)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        sprintBacklogId = response.body.obj._id;
    });

    it('Debería obtener el sprint backlog recién creado', async () => {
        const response = await supertest(app)
            .get(`/sprintBacklogs/${sprintBacklogId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);


        expect(response.body.obj._id).toBe(sprintBacklogId);
    });

    it('Debería reemplazar datos en el sprint backlog', async () => {
        const updatedSprintBacklogData = {
            /* Proporcionar datos para reemplazar en el sprint backlog */
        };

        const response = await supertest(app)
            .put(`/sprintBacklogs/${sprintBacklogId}`)
            .set('Authorization', `Bearer ${token}`)
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
            .set('Authorization', `Bearer ${token}`)
            .send(modifiedSprintBacklogData)
            .expect(200);

        expect(response.body.msg).toBe('Sprint Backlog actualizado correctamente');
    });

    it('Debería eliminar el sprint backlog', async () => {
        const response = await supertest(app)
            .delete(`/sprintBacklogs/${sprintBacklogId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.msg).toBe('Sprint Backlog eliminado correctamente');
    });
});
