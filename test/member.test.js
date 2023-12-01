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

describe('Test CRUD para members', () => {
    let memberId;

    it('Debería crear un nuevo miembro', (done) => {
        const newMemberData = {
            nombreCompleto: "condeGay",
            fechaNacimiento: "2007-07-27T00:00:00.000Z",
            CURP: "ASDADAASDA",
            RFC: "DADADADA",
            domicilio: "pasdopadposad",
            habilidades: [
                "cooc"
            ],
            usuario: "656933e76e73fad376998a67"
            // Proporcionar datos para crear un nuevo miembro
        };

        supertest(app)
            .post('/members')
            .set('Authorization', `Bearer ${token}`)
            .send(newMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                memberId = res.body.obj._id; // Obtener el ID del miembro creado
                done();
            });
    });

    it('Debería obtener el miembro recién creado', (done) => {
        supertest(app)
            .get(`/members/${memberId}`)
            .set('Authorization', `Bearer ${token}`)
            
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre el miembro obtenido
                done();
            });
    });

    it('Debería reemplazar datos en el miembro', (done) => {
        const updatedMemberData = {
            // Proporcionar datos para reemplazar en el miembro
        };

        supertest(app)
            .put(`/members/${memberId}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería actualizar datos en el miembro', (done) => {
        const modifiedMemberData = {
            // Proporcionar datos para actualizar en el miembro
        };

        supertest(app)
            .patch(`/members/${memberId}`)
            .set('Authorization', `Bearer ${token}`)
            .send(modifiedMemberData)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                // Realizar verificaciones sobre la respuesta
                done();
            });
    });

    it('Debería eliminar el miembro', (done) => {
        supertest(app)
            .delete(`/members/${memberId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
