const supertest = require('supertest');
const app = require('../app');

let token;
beforeAll((done) => {
    supertest(app)
        .post("/login")
        .send({ "email": "dev@dev.com", "password": "dev" })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.obj;
            done();
        });
});

describe('Test completo CRUD para controlPanel', () => {
    let controlPanelId;

    it('Debería crear un nuevo tablero de control', (done) => {
        supertest(app)
            .post('/controlPanel')
            .set('Authorization', `Bearer ${token}`)
            .send({
                

                //datos
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                controlPanelId = res.body.obj._id; // Obtener el ID del tablero creado
                done();
            });
    });
/*
    it('Debería obtener el tablero de control recién creado', (done) => {
        supertest(app)
            .get(`/controlPanel/${controlPanelId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre el tablero obtenido
                done();
            });
    });

    it('Debería reemplazar datos en el tablero de control', (done) => {
        supertest(app)
            .put(`/controlPanel/${controlPanelId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                // Proporcionar datos para reemplazar en el tablero de control
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería actualizar datos en el tablero de control', (done) => {
        supertest(app)
            .patch(`/controlPanel/${controlPanelId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                // Proporcionar datos para actualizar en el tablero de control
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería eliminar el tablero de control', (done) => {
        supertest(app)
            .delete(`/controlPanel/${controlPanelId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    */
});
