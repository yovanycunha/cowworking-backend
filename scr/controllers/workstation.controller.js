const express = require('express');
const workstationService = require('../services/workstation.service');

const router = express.Router();

router.post('/', (req, res) => {
  workstationService.createWorkstation(req.body, (response) => {
    res.status(response.status).json(response);
  });
});

router.get('/', (req, res) => {
  workstationService.getWorkstations((response) => {
    res.status(response.status).json(response);
  });
});

router.put('/:id', (req, res) => {
  workstationService.updateWorkstation(req.params.id, req.body, (response) => {
    res.status(response.status).json(response);
  });
});

router.delete('/:id', (req, res) => {
  workstationService.removeWorkstation(req.params.id, (response) => {
    res.status(response.status).json(response);
  });
});

module.exports = router;
