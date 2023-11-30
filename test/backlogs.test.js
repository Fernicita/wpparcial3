const supertest = require('supertest');
const app = require('../app');

let token;
beforeAll((done) => {
    supertest(app)
        .post("/login")
        .send({ "email": "admin@gmail.com", "password": "admin" })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.obj;
            done();
        });
});

describe('Test completo CRUD para backlogs', () => {
    let backlogId;

    it('Debería crear un nuevo backlog', (done) => {
        supertest(app)
            .post('/backlogs')
            .set('Authorization', `Bearer ${token}`)
            .send({
                // aqui datos para crear un nuevo backlog
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                backlogId = res.body.obj._id; // Obtener el ID del backlog creado
                done();
            });
    });

    it('Debería obtener el backlog recién creado', (done) => {
        supertest(app)
            .get(`/backlogs/${backlogId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('Debería reemplazar datos en el backlog', (done) => {
        supertest(app)
            .put(`/backlogs/${backlogId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                // Aqui datos para reemplazar en el backlog
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('Debería actualizar datos en el backlog', (done) => {
        supertest(app)
            .patch(`/backlogs/${backlogId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                // Aqui datos para actualizar en el backlog
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('Debería eliminar el backlog', (done) => {
        supertest(app)
            .delete(`/backlogs/${backlogId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
