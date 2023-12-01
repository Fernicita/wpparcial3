const supertest = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const Project = require('../models/project');
const Member = require('../models/member');



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


describe('Tests CRUD para Proyectos', () => {
    let projectId;
    let projectManagerId;
    let productOwnerId;


    it('Debería crear un nuevo proyecto', async () => {
        const newProjectData = {
            idProyecto: "sdasdad",
            nombreProyecto: "asdadasd",
            fechaSolicitud: "2007-03-02T00:00:00.000Z",
            fechaArranque: "2007-04-23T00:00:00.000Z",
            descripcion: "asdadadada",
            projectManager: null,
            productOwner: null,
            equipoDesarrollo: [],
            /* Proporcionar datos para crear un nuevo proyecto */
        };

        const response = await supertest(app)
            .post('/projects')
            .send(newProjectData)
            .set('Authorization', `Bearer ${token}`)
            .expect(201);

        projectId = response.body.obj._id;
    });

    it('Debería obtener el proyecto recién creado', async () => {
        const response = await supertest(app)
            .get(`/projects/${projectId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.obj._id).toBe(projectId);
    });

    it('Debería reemplazar datos en el proyecto', async () => {
        const updatedProjectData = {
            idProyecto: "sdasdad",
            nombreProyecto: "asdadasd",
            fechaSolicitud: "2007-03-02T00:00:00.000Z",
            fechaArranque: "2007-04-23T00:00:00.000Z",
            descripcion: "asdadadada",
            projectManager: null,
            productOwner: null,
            equipoDesarrollo: [], 
          };

        const response = await supertest(app)
            .put(`/projects/${projectId}`)
            .send(updatedProjectData)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto actualizado');
    });

    it('Debería actualizar datos en el proyecto', async () => {
        const modifiedProjectData = {
            idProyecto: "sdasdad",
            nombreProyecto: "asdadasd",
            fechaSolicitud: "2007-03-02T00:00:00.000Z",
            fechaArranque: "2007-04-23T00:00:00.000Z",
            descripcion: "asdadadada",
            projectManager: null,
            productOwner: null,
            equipoDesarrollo: [],

        };

        const response = await supertest(app)
            .patch(`/projects/${projectId}`)
            .send(modifiedProjectData)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto actualizado correctamente');
    });

    it('Debería eliminar el proyecto', async () => {
        const response = await supertest(app)
            .delete(`/projects/${projectId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto eliminado correctamente');
    });
});
