const mongoose = require('mongoose');

const HistoriaUsuario = require('./userHistory');

const ReleaseBacklogSchema = new mongoose.Schema({
  idRelease: {
    type: String,
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
      ref: 'HistoriaUsuario',
    },
  },
});

const ReleaseBacklog = mongoose.model('ReleaseBacklog', ReleaseBacklogSchema);

module.exports = ReleaseBacklog;
