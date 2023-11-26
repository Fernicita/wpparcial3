const mongoose = require('mongoose');

const Nivel = {
  JUNIOR: 'JUNIOR',
  SENIOR: 'SENIOR',
  MASTER: 'MASTER',
};

const Roles = {
  productOwner: 'Product Owner',
  scrumMaster: 'Scrum Master',
  developer: 'Developer',
};

const MiembroSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  CURP: {
    type: String,
    required: true,
  },
  RFC: {
    type: String,
    required: true,
  },
  domicilio: {
    type: String,
    required: true,
  },
  habilidades: {
    type: Array,
    items: {
      descripcion: String,
      nivel: {
        type: String,
        enum: Nivel,
        required: true,
      },
    },
    required: true,
  },
  roles: {
    type: Array,
    items: {
      type: String,
      enum: Roles,
      required: true,
    },
    required: true,
  },
});

const Miembro = mongoose.model('Miembro', MiembroSchema);

module.exports = Miembro;
