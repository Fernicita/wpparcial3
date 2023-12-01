const supertest = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const UserHistory = require('../models/userHistory');

describe('Pruebas CRUD para Historias de Usuario', () => {
    let userHistoryId;

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/mongodb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería crear una nueva historia de usuario', async () => {
        const newUserHistoryData = {
            /* Proporcionar datos para crear una nueva historia de usuario */
        };

        const response = await supertest(app)
            .post('/usersHistory')
            .send(newUserHistoryData)
            .expect(200);

        userHistoryId = response.body.obj._id;
    });

    it('Debería obtener la historia de usuario recién creada', async () => {
        const response = await supertest(app)
            .get(`/usersHistory/${userHistoryId}`)
            .expect(200);

        expect(response.body.obj._id).toBe(userHistoryId);
        done()
    });

    it('Debería reemplazar datos en la historia de usuario', async () => {
        const updatedUserHistoryData = {
            /* Proporcionar datos para reemplazar en la historia de usuario */
        };

        const response = await supertest(app)
            .put(`/usersHistory/${userHistoryId}`)
            .send(updatedUserHistoryData)
            .expect(200);

        expect(response.body.msg).toBe('Historia de usuario actualizada correctamente ');
    });

    it('Debería actualizar datos en la historia de usuario', async () => {
        const modifiedUserHistoryData = {
            /* Proporcionar datos para actualizar en la historia de usuario */
        };

        const response = await supertest(app)
            .patch(`/usersHistory/${userHistoryId}`)
            .send(modifiedUserHistoryData)
            .expect(200);

        expect(response.body.msg).toBe('Historia de usuario actualizada correctamente ');
    });

    it('Debería eliminar la historia de usuario', async () => {
        const response = await supertest(app)
            .delete(`/usersHistory/${userHistoryId}`)
            .expect(200);

        expect(response.body.msg).toBe('Historia de usuario eliminada correctamente ');
    });
});
