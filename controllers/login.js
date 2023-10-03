const express = require('express');


function create(req, res, next) {    
    res.send('login create');
}

function list(req, res, next) {
    res.send('login list');
}

function index(req, res, next) {    
    res.send('login index');
}

function replace(req, res, next) {    
    res.send('login replace');
}

function update(req, res, next) {
    res.send('login update');
}

function destroy(req, res, next) {
    res.send('login destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};