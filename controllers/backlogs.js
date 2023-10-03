const express = require('express');


function create(req, res, next) {    
    res.send('backlogs create');
}

function list(req, res, next) {
    res.send('backlogs list');
}

function index(req, res, next) {    
    res.send('backlogs index');
}

function replace(req, res, next) {    
    res.send('backlogs replace');
}

function update(req, res, next) {
    res.send('backlogs update');
}

function destroy(req, res, next) {
    res.send('backlogs destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};