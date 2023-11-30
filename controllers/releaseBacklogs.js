const express = require('express');
const ReleaseBacklog = require('../models/releaseBacklog');
const HistoriaUsuario = require('../models/userHistory');

function create(req, res, next) {    
    const idRelease = req.body.idRelease;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuario = req.body.historiasUsuario;

    const releaseBacklog = new ReleaseBacklog({
        idRelease,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    releaseBacklog.save().then(obj => res.status(200).json({
        msg:"Release Backlog creado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo crear el release backlog",
        obj:ex
    }));


}

function list(req, res, next) {
    releaseBacklog.find().then(obj => res.status(200).json({
        msg:"Lista de release backlogs",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo recuperar la lista de release backlogs",
        obj:ex
    }));

}

function index(req, res, next) {    
    const releaseBacklogId = req.params.id;
    releaseBacklog.findById(releaseBacklogId).then(obj => res.status(200).json({
        msg:"Release Backlog encontrado",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo encontrar el release backlog",
        obj:ex
    }));

}

function replace(req, res, next) {    
    const releaseBacklogId = req.params.id;
    const idRelease = req.body.idRelease;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuario = req.body.historiasUsuario;

    const releaseBacklog = new ReleaseBacklog({
        idRelease,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    releaseBacklog.findByIdAndUpdate(releaseBacklogId, releaseBacklog).then(obj => res.status(200).json({
        msg:"Release Backlog reemplazado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo reemplazar el release backlog",
        obj:ex
    }));
}

function update(req, res, next) {
    const releaseBacklogId = req.params.id;
    const idRelease = req.body.idRelease;
    const fechaInicio = req.body.fechaInicio;
    const fechaFin = req.body.fechaFin;
    const historiasUsuario = req.body.historiasUsuario;

    const releaseBacklog = new ReleaseBacklog({
        idRelease,
        fechaInicio,
        fechaFin,
        historiasUsuario
    });

    releaseBacklog.findByIdAndUpdate(releaseBacklogId, releaseBacklog).then(obj => res.status(200).json({
        msg:"Release Backlog actualizado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar el release backlog",
        obj:ex
    }));
}

function destroy(req, res, next) {
    const releaseBacklogId = req.params.id;
    releaseBacklog.findByIdAndDelete(releaseBacklogId).then(obj => res.status(200).json({
        msg:"Release Backlog eliminado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo eliminar el release backlog",
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