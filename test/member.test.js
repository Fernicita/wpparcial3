const supertest = require('supertest');
const app = require('../app');

describe('Test CRUD para members', () => {
    let memberId;

    it('Debería crear un nuevo miembro', async (done) => {
        const newMemberData = {
            // Proporcionar datos para crear un nuevo miembro
        };

        supertest(app)
            .post('/members')
            .send(newMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                memberId = res.body.obj._id; // Obtener el ID del miembro creado
                done();
            });
    });

    it('Debería obtener el miembro recién creado', async (done) => {
        supertest(app)
            .get(`/members/${memberId}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre el miembro obtenido
                done();
            });
    });

    it('Debería reemplazar datos en el miembro', async (done) => {
        const updatedMemberData = {
            // Proporcionar datos para reemplazar en el miembro
        };

        supertest(app)
            .put(`/members/${memberId}`)
            .send(updatedMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería actualizar datos en el miembro', async (done) => {
        const modifiedMemberData = {
            // Proporcionar datos para actualizar en el miembro
        };

        supertest(app)
            .patch(`/members/${memberId}`)
            .send(modifiedMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería eliminar el miembro', async (done) => {
        supertest(app)
            .delete(`/members/${memberId}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
