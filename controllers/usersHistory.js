const express = require('express');


function create(req, res, next) {    
    res.send('usersHistory create');
}

function list(req, res, next) {
    res.send('usersHistory list');
}

function index(req, res, next) {    
    res.send('usersHistory index');
}

function replace(req, res, next) {    
    res.send('usersHistory replace');
}

function update(req, res, next) {
    res.send('usersHistory update');
}

function destroy(req, res, next) {
    res.send('usersHistory destroy');
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};