const request = require('supertest');
const server = require('../scr/server');


describe('Workstation API Endpoints test', () => {
  let workstationId;

  it('should create a new workstation', async () => {
    const response = await request(server)
      .post('/api/workstation')
      .send({
        name: 'Workstation 6',
      });
    expect(response.statusCode).toEqual(201);
    expect(response.body.data.name).toEqual('Workstation 6');
    workstationId = response.body.data._id;
  });

  it('should update a workstation', async () => {
    const response = await request(server)
      .put(`/api/workstation/${workstationId}`)
      .send({
        name: 'Workstation 6 updated',
      });
    
      expect(response.statusCode).toEqual(200);
      expect(response.body.data.name).toEqual('Workstation 6 updated');
  });


  it('should remove a workstation', async () => {
    const response = await request(server).delete(`/api/workstation/${workstationId}`);

    expect(response.statusCode).toEqual(200);
  });

  it('should get all workstations', async () => {
    const response = await request(server).get('/api/workstation');

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body.data)).toBeTruthy()
  });
});
