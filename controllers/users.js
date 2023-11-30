const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

async function create(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    const rol = req.body.rol || 'developer';
    let salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        email:email, 
        password:passwordHash, 
        salt:salt,
        rol:rol
    }); 
    user.save().then(obj => res.status(200).json({
        message:res.__('register.success'), 
        obj:obj
    })).catch(ex => res.status(500).json({
        message:res.__('register.fail'),
        obj:ex
    }));
}

function list(req, res, next) {
    User.find().then(objs => res.status(200).json({
        message:"Lista de usuarios",
        obj:objs
    })).catch(ex => res.status(500).json({
        message:"No se puedo consultar la lista de usuarios",
        obj:ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    User.findOne({"_id":id}).then(obj => res.status(200).json({
        message:`Usuario con el id ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se puedo consultar el usuario con el id: ${id}`,
        obj:ex
    }));
}

function replace(req, res, next){
    const id = req.params.id;
    let email = req.body.email ? req.body.email : "";
    let password = req.body.password ? req.body.password : "";
    let rol = req.body.rol ? req.body.rol : "";
    let user = new Object({
        _email:email, 
        _password:password,
        _rol:rol
    });
    User.findOneAndUpdate({"_id":id}, user, {new:true})
            .then(obj => res.status(200).json({
                message:`Usuario reemplazado correctamente, con el id: ${id}`,
                obj:obj
            })).catch(ex => res.status(500).json({
                message:`No se puedo reemplazar el usuario con el id: ${id}`,
                obj:ex
            }));
}

function update(req, res, next){
    const id = req.params.id;
    let email = req.body.email;
    let password = req.body.password;
    let rol = req.body.rol;
    let user = new Object();
    if(email) user._email = email;
    if(password) user._password = password;
    if(rol) user._rol = rol;
    User.findOneAndUpdate({"_id":id}, user)
            .then(obj => res.status(200).json({
                message:`Usuario actualizado corretamente, con el id: ${id}`,
                obj:obj
            })).catch(ex => res.status(500).json({
                message:`No se puedo actualizar el usuario con el id: ${id}`,
                obj:ex
            }));
}

function destroy(req, res, next){
    const id = req.params.id;
    User.findByIdAndRemove({"_id":id}).then(obj => res.status(200).json({
        message:`Usuario eliminado correctamente, contaba con el id: ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:`No se puedo eliminar el usuario con el id: ${id}`,
        obj:ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};