const app = require('../config/express');
const db = require('../config/mongoose');

require('../config/router')(app);

db();

const servidor = app.listen(app.get('port'), () => {
  console.log(`CowWorking server listening on port ${app.get('port')}`);
});

module.exports = servidor;
