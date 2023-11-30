const mongoose = require('mongoose');

const prio = {
    ALTA: 'ALTA',
    MEDIA: 'MEDIA',
    BAJA: 'BAJA',
};

const HistoriaUsuarioSchema = new mongoose.Schema({
  idProyecto: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  prioridad: {
    type: String,
    enum: Object.values(prio),
    required: true,
  },
  tamaño: {
    type: Number,
    required: true,
  },
  funcionalidad: {
    type: String,
    required: true,
  },
  beneficio: {
    type: String,
    required: true,
  },
  contexto: {
    type: String,
    required: true,
  },
  valorFibonacci: {
    type: Number,
    required: true,
  }
});

const HistoriaUsuario = mongoose.model('HistoriaUsuario', HistoriaUsuarioSchema);

module.exports = HistoriaUsuario;
