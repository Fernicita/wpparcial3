const express = require('express');
const UserHistory = require('../models/userHistory');

function create(req, res, next) { 
    const idProyecto = req.body.idProyecto;
    const nombre = req.body.nombre;
    const prioridad = req.body.prioridad;
    const tamaño = req.body.tamaño;
    const funcionalidad = req.body.funcionalidad;
    const beneficio = req.body.beneficio;
    const contexto = req.body.contexto;
    const valorFibonacci = req.body.valorFibonacci;
    
    const userHistory = new UserHistory({
        idProyecto,
        nombre,
        prioridad,
        tamaño,
        funcionalidad,
        beneficio,
        contexto,
        valorFibonacci
    });

    userHistory.save().then(obj => res.status(200).json({
        msg:"Historia de usuario creada correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo crear la historia de usuario",
        obj:ex
    }));
}

function list(req, res, next) {
    UserHistory.find().then(obj => res.status(200).json({
        msg:"Lista de historias de usuario",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo recuperar la lista de historias de usuario",
        obj:ex
    }));

}

function index(req, res, next) {    
    const id = req.params.id;
    UserHistory.findById(id).then(obj => res.status(200).json({
        msg:"Historia de usuario",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo recuperar la historia de usuario",
        obj:ex
    }));
}

function replace(req, res, next) {    
    const id = req.params.id;
    const idProyecto = req.body.idProyecto;
    const nombre = req.body.nombre;
    const prioridad = req.body.prioridad;
    const tamaño = req.body.tamaño;
    const funcionalidad = req.body.funcionalidad;
    const beneficio = req.body.beneficio;
    const contexto = req.body.contexto;
    const valorFibonacci = req.body.valorFibonacci;
    
    const userHistory = new UserHistory({
        idProyecto,
        nombre,
        prioridad,
        tamaño,
        funcionalidad,
        beneficio,
        contexto,
        valorFibonacci
    });

    UserHistory.findByIdAndUpdate(id, userHistory).then(obj => res.status(200).json({
        msg:"Historia de usuario actualizada correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar la historia de usuario",
        obj:ex
    }));
}

function update(req, res, next) {
    const id = req.params.id;
    const idProyecto = req.body.idProyecto;
    const nombre = req.body.nombre;
    const prioridad = req.body.prioridad;
    const tamaño = req.body.tamaño;
    const funcionalidad = req.body.funcionalidad;
    const beneficio = req.body.beneficio;
    const contexto = req.body.contexto;
    const valorFibonacci = req.body.valorFibonacci;
    
    const userHistory = new UserHistory({
        idProyecto,
        nombre,
        prioridad,
        tamaño,
        funcionalidad,
        beneficio,
        contexto,
        valorFibonacci
    });

    UserHistory.findByIdAndUpdate(id, userHistory).then(obj => res.status(200).json({
        msg:"Historia de usuario actualizada correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar la historia de usuario",
        obj:ex
    }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    UserHistory.findByIdAndRemove(id).then(obj => res.status(200).json({
        msg:"Historia de usuario eliminada correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo eliminar la historia de usuario",
        obj:ex
    }));
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};