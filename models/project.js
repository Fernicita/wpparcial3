const mongoose = require('mongoose');

const ExpedienteProyectoSchema = new mongoose.Schema({
  idProyecto: {
    type: String,
    required: true,
  },
  nombreProyecto: {
    type: String,
    required: true,
  },
  fechaSolicitud: {
    type: Date,
    required: true,
  },
  fechaArranque: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  projectManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Miembro',
    required: false,
  },
  productOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Miembro',
    required: false,
  },
  equipoDesarrollo: {
    type: Array,
    items: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Miembro',
    },
    required: true,
  },
  tableroControl: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TableroControl',
    required: false,
  },
});

const ExpedienteProyecto = mongoose.model('ExpedienteProyecto', ExpedienteProyectoSchema);

module.exports = ExpedienteProyecto;
