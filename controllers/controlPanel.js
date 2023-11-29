const express = require('express');
const HistoriaUsuario = require('../models/userHistory');
const TableroControl = require('../models/controlPanel');

function create(req, res, next) { 
    const productBacklogId = req.body.productBacklog;
    const sprintBacklogId = req.body.sprintBacklog;
    const releaseBacklogId = req.body.releaseBacklog;

    productBacklogIds = []
    sprintBacklogIds = []
    releaseBacklogIds = []

    productBacklogId.forEach((item) => {
        productBacklogIds.push(item._id);
    }
    );

    sprintBacklogId.forEach((item) => {
        sprintBacklogIds.push(item._id);
    }
    );

    releaseBacklogId.forEach((item) => {
        releaseBacklogIds.push(item._id);
    }
    );

    const tableroControl = new TableroControl({
        productBacklog: productBacklogId,
        sprintBacklog: sprintBacklogId,
        releaseBacklog: releaseBacklogId
    });

    tableroControl.save().then((result) => {
        res.status(201).json({
            message: res.__('tableroControl.create.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('tableroControl.create.fail'),
            obj: ex
        });
    });

}

function list(req, res, next) {
    
        TableroControl.find().populate('productBacklog').populate('sprintBacklog').populate('releaseBacklog').then((result) => {
            res.status(200).json({
                message: res.__('tableroControl.list.success'),
                obj: result
            });
        }).catch((ex) => {
            res.status(500).json({
                message: res.__('tableroControl.list.fail'),
                obj: ex
            });
        });
}

function index(req, res, next) {    
    const id = req.params.id;
    TableroControl.findById(id).populate('productBacklog').populate('sprintBacklog').populate('releaseBacklog').then((result) => {
        res.status(200).json({
            message: res.__('tableroControl.index.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('tableroControl.index.fail'),
            obj: ex
        });
    });
}

function replace(req, res, next) {    
    const id = req.params.id;
    const productBacklogId = req.body.productBacklog;
    const sprintBacklogId = req.body.sprintBacklog;
    const releaseBacklogId = req.body.releaseBacklog;

    productBacklogIds = []
    sprintBacklogIds = []
    releaseBacklogIds = []

    productBacklogId.forEach((item) => {
        productBacklogIds.push(item._id);
    }
    );

    sprintBacklogId.forEach((item) => {
        sprintBacklogIds.push(item._id);
    }
    );

    releaseBacklogId.forEach((item) => {
        releaseBacklogIds.push(item._id);
    }
    );

    const tableroControl = new TableroControl({
        productBacklog: productBacklogId,
        sprintBacklog: sprintBacklogId,
        releaseBacklog: releaseBacklogId
    });

    TableroControl.findByIdAndUpdate(id, tableroControl).then((result) => {
        res.status(200).json({
            message: res.__('tableroControl.replace.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('tableroControl.replace.fail'),
            obj: ex
        });
    });
}

function update(req, res, next) {
    const id = req.params.id;
    const productBacklogId = req.body.productBacklog;
    const sprintBacklogId = req.body.sprintBacklog;
    const releaseBacklogId = req.body.releaseBacklog;

    productBacklogIds = []
    sprintBacklogIds = []
    releaseBacklogIds = []

    productBacklogId.forEach((item) => {
        productBacklogIds.push(item._id);
    }
    );

    sprintBacklogId.forEach((item) => {
        sprintBacklogIds.push(item._id);
    }
    );

    releaseBacklogId.forEach((item) => {
        releaseBacklogIds.push(item._id);
    }
    );

    const tableroControl = new TableroControl({
        productBacklog: productBacklogId,
        sprintBacklog: sprintBacklogId,
        releaseBacklog: releaseBacklogId
    });

    TableroControl.findByIdAndUpdate(id, tableroControl).then((result) => {
        res.status(200).json({
            message: res.__('tableroControl.update.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('tableroControl.update.fail'),
            obj: ex
        });
    });
}

function destroy(req, res, next) {

    const id = req.params.id;

    TableroControl.findByIdAndRemove(id).then((result) => {
        res.status(200).json({
            message: res.__('tableroControl.destroy.success'),
            obj: result
        });
    }).catch((ex) => {
        res.status(500).json({
            message: res.__('tableroControl.destroy.fail'),
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