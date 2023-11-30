const supertest = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const Project = require('../models/project');
const Member = require('../models/member');

describe('Tests CRUD para Proyectos', () => {
    let projectId;
    let projectManagerId;
    let productOwnerId;

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/testdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Crea datos de miembros de proyecto para usar en las pruebas
        const projectManager = await Member.create({ /* Datos del project manager */ });
        const productOwner = await Member.create({ /* Datos del product owner */ });

        projectManagerId = projectManager._id;
        productOwnerId = productOwner._id;
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Debería crear un nuevo proyecto', async () => {
        const newProjectData = {
            /* Proporcionar datos para crear un nuevo proyecto */
        };

        const response = await supertest(app)
            .post('/projects')
            .send(newProjectData)
            .expect(201);

        projectId = response.body.obj._id;
    });

    it('Debería obtener el proyecto recién creado', async () => {
        const response = await supertest(app)
            .get(`/projects/${projectId}`)
            .expect(200);

        expect(response.body.obj._id).toBe(projectId);
    });

    it('Debería reemplazar datos en el proyecto', async () => {
        const updatedProjectData = {
            /*  datos para reemplazar en el proyecto */
        };

        const response = await supertest(app)
            .put(`/projects/${projectId}`)
            .send(updatedProjectData)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto actualizado');
    });

    it('Debería actualizar datos en el proyecto', async () => {
        const modifiedProjectData = {
            /* datos para actualizar en el proyecto */
        };

        const response = await supertest(app)
            .patch(`/projects/${projectId}`)
            .send(modifiedProjectData)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto actualizado correctamente');
    });

    it('Debería eliminar el proyecto', async () => {
        const response = await supertest(app)
            .delete(`/projects/${projectId}`)
            .expect(200);

        expect(response.body.msg).toBe('Proyecto eliminado correctamente');
    });
});
