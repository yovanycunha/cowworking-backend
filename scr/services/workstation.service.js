const responses = require('../../utils/responses');
const Workstation = require('../models/workstation.model');

const workstationService = (() => {
  const createWorkstation = async (workstation, callback) => {
    const newWorkstation = new Workstation(workstation);
    try {
      await newWorkstation.save();
      return callback(responses.created('Workstation created', newWorkstation));
    } catch (error) {
      return callback(responses.badRequest(error.message));
    }
  };

  const getWorkstations = async (callback) => {
    try {
      const workstations = await Workstation.find({});
      return callback(responses.ok('Workstations found', workstations));
    } catch (error) {
      return callback(responses.badRequest(error.message));
    }
  };

  const updateWorkstation = async (id, workstation, callback) => {
    try {
      await Workstation.findByIdAndUpdate(id, workstation);
      return callback(responses.ok('Workstation updated successfully', workstation));
    } catch (error) {
      return callback(responses.badRequest(`Error updating workstation: ${error.message}`));
    }
  };

  const removeWorkstation = async (id, callback) => {
    try {
      const workstation = await Workstation.findByIdAndRemove(id);
      if (!workstation) {
        return callback(responses.notFound('Workstation not found'));
      }
      return callback(responses.ok('Workstation removed successfully'));
    } catch (error) {
      return callback(responses.badRequest(`Error removing workstation: ${error.message}`));
    }
  };

  return {
    createWorkstation,
    getWorkstations,
    updateWorkstation,
    removeWorkstation,
  };
})();

module.exports = workstationService;
