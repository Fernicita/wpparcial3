const express = require('express');


function create(req, res, next) {    
    res.send('controlPanel create');
}

function list(req, res, next) {
    res.send('controlPanel list');
}

function index(req, res, next) {    
    res.send('controlPanel index');
}

function replace(req, res, next) {    
    res.send('controlPanel replace');
}

function update(req, res, next) {
    res.send('controlPanel update');
}

function destroy(req, res, next) {
    res.send('controlPanel destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};