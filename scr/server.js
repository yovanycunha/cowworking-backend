const app = require('../config/express');
const db = require('../config/mongoose');

require('../config/router')(app);

db();

const server = app.listen(app.get('port'), () => {
  console.log(`CowWorking server listening on port ${app.get('port')}`);
});

module.exports = server;
