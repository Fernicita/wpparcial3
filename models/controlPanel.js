const mongoose = require('mongoose');

const HistoriaUsuario = require('./models/userHistory');

const TableroControlSchema = new mongoose.Schema({
  productBacklog: {
    type: Array,
    items: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HistoriaUsuario',
    },
  },
  sprintBacklog: {
    type: Array,
    items: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HistoriaUsuario',
    },
  },
  releaseBacklog: {
    type: Array,
    items: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HistoriaUsuario',
    }
}});

const TableroControl = mongoose.model('TableroControl', TableroControlSchema);

module.exports = TableroControl;
