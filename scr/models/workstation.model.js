const mongoose = require('mongoose');

const WorkstationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
  },

  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Workstation = mongoose.model('Workstation', WorkstationSchema);
module.exports = Workstation;
