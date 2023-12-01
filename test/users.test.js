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
            console.log("Res res res", res.body)
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
                "email": "dev@dev.com", 
                "password": "dev"
                // Aquí van los datos para crear un nuevo usuario
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                userId = res.body.obj._id; // Obtener el ID del usuario creado
                console.log("ESTO ES EL BODYYYYYY",res.body);
                console.log("ID2",userId);
                done();
            });
    });

    console.log("ID2",userId);

    it('Debería obtener el usuario recién creado', (done) => {
        console.log("token es gay", token)
        console.log("ID2",userId);
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
                "email": "dev@dev.com", "password": "deve"
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
                "email": "dev@dev.com", "password": "dev"
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
