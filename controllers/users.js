const express = require('express');


function create(req, res, next) {    
    res.send('users create');
}

function list(req, res, next) {
    res.send('users list');
}

function index(req, res, next) {    
    res.send('users index');
}

function replace(req, res, next) {    
    res.send('users replace');
}

function update(req, res, next) {
    res.send('users update');
}

function destroy(req, res, next) {
    res.send('users destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};