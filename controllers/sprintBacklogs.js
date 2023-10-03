const express = require('express');


function create(req, res, next) {    
    res.send('sprintBacklogs create');
}

function list(req, res, next) {
    res.send('sprintBacklogs list');
}

function index(req, res, next) {    
    res.send('sprintBacklogs index');
}

function replace(req, res, next) {    
    res.send('sprintBacklogs replace');
}

function update(req, res, next) {
    res.send('sprintBacklogs update');
}

function destroy(req, res, next) {
    res.send('sprintBacklogs destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};