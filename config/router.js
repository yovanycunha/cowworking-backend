const WorkstationController = require('../scr/controllers/workstation.controller');

module.exports = (app) => {
  app.use('/api/workstation', WorkstationController);
};
