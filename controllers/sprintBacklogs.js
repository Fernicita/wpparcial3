const express = require('express');
const SprintBacklog = require('../models/sprintBacklog');
const HistoriaUsuario = require('../models/userHistory');

function create(req, res, next) {   
    const idSprint = req.body.idSprint;
    const numeroSprint = req.body.numeroSprint;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuarioId = req.body.historiasUsuario;

    let historiasUsuario = [];

    historiasUsuarioId.forEach(element => {
        historiasUsuario.push(HistoriaUsuario.findById(element));
    });

    const sprintBacklog = new SprintBacklog({
        idSprint,
        numeroSprint,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    sprintBacklog.save().then(obj => res.status(200).json({
        msg:"Sprint Backlog creado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo crear el sprint backlog",
        obj:ex
    }));



}

function list(req, res, next) {
    sprintBacklog.find().then(obj => res.status(200).json({
        msg:"Lista de sprint backlogs",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo recuperar la lista de sprint backlogs",
        obj:ex
    }));

}

function index(req, res, next) {    
    const sprintBacklogId = req.params.id;
    sprintBacklog.findById(sprintBacklogId).then(obj => res.status(200).json({
        msg:"Sprint Backlog encontrado",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo encontrar el sprint backlog",
        obj:ex
    }));

}

function replace(req, res, next) {   
    const sprintBacklogId = req.params.id;
    const idSprint = req.body.idSprint;
    const numeroSprint = req.body.numeroSprint;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuarioId = req.body.historiasUsuario;

    let historiasUsuario = [];

    historiasUsuarioId.forEach(element => {
        historiasUsuario.push(HistoriaUsuario.findById(element));
    });

    const sprintBacklog = new SprintBacklog({
        idSprint,
        numeroSprint,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    sprintBacklog.findByIdAndUpdate(sprintBacklogId, sprintBacklog).then(obj => res.status(200).json({
        msg:"Sprint Backlog actualizado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar el sprint backlog",
        obj:ex
    })); 
}

function update(req, res, next) {
    const sprintBacklogId = req.params.id;
    const idSprint = req.body.idSprint;
    const numeroSprint = req.body.numeroSprint;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuarioId = req.body.historiasUsuario;

    let historiasUsuario = [];

    historiasUsuarioId.forEach(element => {
        historiasUsuario.push(HistoriaUsuario.findById(element));
    });

    const sprintBacklog = new SprintBacklog({
        idSprint,
        numeroSprint,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    sprintBacklog.findByIdAndUpdate(sprintBacklogId, sprintBacklog).then(obj => res.status(200).json({
        msg:"Sprint Backlog actualizado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar el sprint backlog",
        obj:ex
    }));
}

function destroy(req, res, next) {
    const sprintBacklogId = req.params.id;
    sprintBacklog.findByIdAndRemove(sprintBacklogId).then(obj => res.status(200).json({
        msg:"Sprint Backlog eliminado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo eliminar el sprint backlog",
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
}