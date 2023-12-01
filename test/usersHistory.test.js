const supertest = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const UserHistory = require('../models/userHistory');

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


describe('Pruebas CRUD para Historias de Usuario', () => {
    let userHistoryId;

    it('Debería crear una nueva historia de usuario', (done) => {
        const newUserHistoryData = {

            idProyecto: "1212",
            nombre: "asdasd",
            prioridad: "ALTA",
            tamaño: 3,
            funcionalidad: "ASDADS",
            beneficio: "ASDASD",
            contexto: "ASDAD",
            valorFibonacci: 1

            /* Proporcionar datos para crear una nueva historia de usuario */
        };

        supertest(app)
            .post('/usersHistory')
            .set('Authorization', `Bearer ${token}`)
            .send(newUserHistoryData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                userHistoryId = res.body.obj._id;
                done();
            });
    });

    it('Debería obtener el userHistory recien creado', (done) => {
        supertest(app)
            .get(`/usersHistory/${userHistoryId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre el usuario obtenido
                done();
            });
    });

    it('Debería reemplazar datos en la historia de usuario', async () => {
        const updatedUserHistoryData = {
            /* Proporcionar datos para reemplazar en la historia de usuario */
        };

        const response = await supertest(app)
            .put(`/usersHistory/${userHistoryId}`)
            .set('Authorization', `Bearer ${token}`)
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
            .set('Authorization', `Bearer ${token}`)
            .send(modifiedUserHistoryData)
            .expect(200);

        expect(response.body.msg).toBe('Historia de usuario actualizada correctamente ');
    });

    it('Debería eliminar la historia de usuario', async () => {
        const response = await supertest(app)
            .delete(`/usersHistory/${userHistoryId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.msg).toBe('Historia de usuario eliminada correctamente ');
    });
});
