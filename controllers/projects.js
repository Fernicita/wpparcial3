const express = require('express');


function create(req, res, next) {    
    res.send('projects create');
}

function list(req, res, next) {
    res.send('projects list');
}

function index(req, res, next) {    
    res.send('projects index');
}

function replace(req, res, next) {    
    res.send('projects replace');
}

function update(req, res, next) {
    res.send('projects update');
}

function destroy(req, res, next) {
    res.send('projects destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};