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

describe('Test completo CRUD para usuarios', () => {
    let userId;

    it('Debería crear un nuevo usuario', (done) => {
        supertest(app)
            .post('/users')
            .set('Authorization', `Bearer ${token}`)
            .send({
                // Aquí van los datos para crear un nuevo usuario
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                userId = res.body.obj._id; // Obtener el ID del usuario creado
                done();
            });
    });

    it('Debería obtener el usuario recién creado', (done) => {
        supertest(app)
            .get(`/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre el usuario obtenido
                done();
            });
    });

    it('Debería reemplazar datos en el usuario', (done) => {
        supertest(app)
            .put(`/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                // datos para reemplazar en el usuario
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería actualizar datos en el usuario', (done) => {
        supertest(app)
            .patch(`/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                //  datos para actualizar en el usuario
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería eliminar el usuario', (done) => {
        supertest(app)
            .delete(`/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
