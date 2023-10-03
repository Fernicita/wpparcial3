const express = require('express');


function create(req, res, next) {    
    res.send('releaseBacklogs create');
}

function list(req, res, next) {
    res.send('releaseBacklogs list');
}

function index(req, res, next) {    
    res.send('releaseBacklogs index');
}

function replace(req, res, next) {    
    res.send('releaseBacklogs replace');
}

function update(req, res, next) {
    res.send('releaseBacklogs update');
}

function destroy(req, res, next) {
    res.send('releaseBacklogs destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};