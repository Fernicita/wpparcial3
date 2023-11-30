const mongoose = require('mongoose');

const HistoriasUsuario = require('./userHistory');

const SprintBacklogSchema = new mongoose.Schema({
  idSprint: {
    type: String,
    required: true,
  },
  numeroSprint: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  historiasUsuario: {
    type: Array,
    items: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HistoriasUsuario',
    },
  },
});

const SprintBacklog = mongoose.model('SprintBacklog', SprintBacklogSchema);

module.exports = SprintBacklog;
