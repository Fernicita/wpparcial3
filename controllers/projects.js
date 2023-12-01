const express = require('express');
const Project = require('../models/project');
const Member = require('../models/member');


async function create(req, res, next) {   
    const idProyecto = req.body.idProyecto;
    const nombreProyecto = req.body.nombreProyecto;
    const fechaSolicitud = req.body.fechaSolicitud;
    const fechaArranque = req.body.fechaArranque;
    const descripcion = req.body.descripcion;
    const projectManager = req.body.projectManagerId ? req.body.projectManagerId : null;
    const productOwner = req.body.productOwnerId ? req.body.productOwnerId : null;
    const equipoDesarrollo = req.body.equipoDesarrollo ? req.body.equipoDesarrollo : [];
    const tableroControl = req.body.tableroControl ;


    const project = new Project({
        idProyecto: idProyecto,
        nombreProyecto: nombreProyecto,
        fechaSolicitud: fechaSolicitud,
        fechaArranque: fechaArranque,
        descripcion: descripcion,
        projectManager: projectManager,
        productOwner: productOwner,
        equipoDesarrollo: equipoDesarrollo,
        tableroControl: tableroControl
    });

    project.save().then((result) => {
        res.status(201).json({
            message: res.__('project.create.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('project.create.fail'),
            obj: ex
        });
    });


    
}

function list(req, res, next) {
    
        Project.find().populate('projectManager').populate('productOwner').populate('equipoDesarrollo').then((result) => {
            res.status(200).json({
                message: res.__('project.list.success'),
                obj: result
            });
        }).catch((ex) => {
            res.status(500).json({
                message: res.__('project.list.fail'),
                obj: ex
            });
        });
}

function index(req, res, next) {    
    const id = req.params.id;
    Project.findById(id).populate('projectManager').populate('productOwner').populate('equipoDesarrollo').then((result) => {
        res.status(200).json({
            message: res.__('project.index.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('project.index.fail'),
            obj: ex
        });
    });
}

async function replace(req, res, next) {    
    const id = req.params.id;
    const idProyecto = req.body.idProyecto;
    const nombreProyecto = req.body.nombreProyecto;
    const fechaSolicitud = req.body.fechaSolicitud;
    const fechaArranque = req.body.fechaArranque;
    const descripcion = req.body.descripcion;
    const projectManagerID = req.body.projectManagerId;
    const productOwnerId = req.body.productOwnerId;
    const equipoDesarrollo = req.body.equipoDesarrollo;

    let projectManager = await Member.findById({"_id": projectManagerID});
    let productOwner = await Member.findById({"_id": productOwnerID});

    const project = new Project({
        idProyecto: idProyecto,
        nombreProyecto: nombreProyecto,
        fechaSolicitud: fechaSolicitud,
        fechaArranque: fechaArranque,
        descripcion: descripcion,
        projectManager: projectManager,
        productOwner: productOwner,
        equipoDesarrollo: equipoDesarrollo
    });

    Project.findByIdAndUpdate(id, project).then((result) => {
        res.status(200).json({
            message: res.__('project.replace.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('project.replace.fail'),
            obj: ex
        });
    });
}

async function update(req, res, next) {

    const id = req.params.id;
    const idProyecto = req.body.idProyecto;
    const nombreProyecto = req.body.nombreProyecto;
    const fechaSolicitud = req.body.fechaSolicitud;
    const fechaArranque = req.body.fechaArranque;
    const descripcion = req.body.descripcion;
    const projectManagerID = req.body.projectManagerId;
    const productOwnerId = req.body.productOwnerId;
    const equipoDesarrollo = req.body.equipoDesarrollo;

    let projectManager = await Member.findById({"_id": projectManagerID});
    let productOwner = await Member.findById({"_id": productOwnerID});

    const project = new Project({
        idProyecto: idProyecto,
        nombreProyecto: nombreProyecto,
        fechaSolicitud: fechaSolicitud,
        fechaArranque: fechaArranque,
        descripcion: descripcion,
        projectManager: projectManager,
        productOwner: productOwner,
        equipoDesarrollo: equipoDesarrollo
    });

    Project.findByIdAndUpdate(id, project).then((result) => {
        res.status(200).json({
            message: res.__('project.update.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('project.update.fail'),
            obj: ex
        });
    });
}

function destroy(req, res, next) {
    const id = req.params.id;
    Project.findByIdAndRemove(id).then((result) => {
        res.status(200).json({
            message: res.__('project.destroy.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('project.destroy.fail'),
            obj: ex
        });
    });
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};