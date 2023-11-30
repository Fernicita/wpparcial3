const express = require('express');
const Member = require('../models/member');


function create(req, res, next) {    
    const nombreCompleto = req.body.nombreCompleto;
    const fechaNacimiento = req.body.fechaNacimiento;
    const CURP = req.body.CURP;
    const RFC = req.body.RFC;
    const domicilio = req.body.domicilio;
    const habilidades = req.body.habilidades;
    const roles = req.body.roles;

    const member = new Member({
        nombreCompleto,
        fechaNacimiento,
        CURP,
        RFC,
        domicilio,
        habilidades,
        roles
    });

    member.save().then(obj => res.status(200).json({
        msg:"Miembro creado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo crear el miembro",
        obj:ex
    }));


}

async function list(req, res, next) {
    try {
      const members = await Member.find({});
      res.status(200).json({
        msg: 'Lista de socios',
        members,
      });
    } catch (error) {
      next(error);
    }
  }
  

  async function index(req, res, next) {
    try {
      const memberId = req.params.id;
      const member = await Member.findById(memberId);
      if (!member) {
        return res.status(404).json({
          msg: `Socio con el ID ${memberId} no encontrado`,
          obj: null,
        });
      }
      res.status(200).json({
        msg: 'Detalle de socio',
        obj: member,
      });
    } catch (error) {
      next(error);
    }
}



async function replace(req, res, next) {    
    const memberId = req.params.id;
    const nombreCompleto = req.body.nombreCompleto;
    const fechaNacimiento = req.body.fechaNacimiento;
    const CURP = req.body.CURP;
    const RFC = req.body.RFC;
    const domicilio = req.body.domicilio;
    const habilidades = req.body.habilidades;
    const roles = req.body.roles;

    const member = new Member({
        _id:memberId,
        nombreCompleto,
        fechaNacimiento,
        CURP,
        RFC,
        domicilio,
        habilidades,
        roles
    });

    try {
        const obj = await Member.findByIdAndUpdate(memberId, member);
        res.status(200).json({
          msg: 'Socio actualizado',
          obj,
        });
      } catch (error) {
        next(error);
      }
}

function update(req, res, next) {

    const memberId = req.params.id;
    const nombreCompleto = req.body.nombreCompleto;
    const fechaNacimiento = req.body.fechaNacimiento;
    const CURP = req.body.CURP;
    const RFC = req.body.RFC;
    const domicilio = req.body.domicilio;
    const habilidades = req.body.habilidades;
    const roles = req.body.roles;

    const member = new Member({
        _id:memberId,
        nombreCompleto,
        fechaNacimiento,
        CURP,
        RFC,
        domicilio,
        habilidades,
        roles
    });

    Member.findByIdAndUpdate(memberId, member).then(obj => res.status(200).json({
        msg:"Miembro actualizado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo actualizar el miembro",
        obj:ex
    }));


}

function destroy(req, res, next) {
    const memberId = req.params.id;
    Member.findByIdAndRemove(memberId).then(obj => res.status(200).json({
        msg:"Miembro eliminado correctamente ",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "No se pudo eliminar el miembro",
        obj:ex
    }));

}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};