const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// module.exports = () => {
//   const app = express();

//   app.set('port', process.env.PORT || 3000);

//   app.use(bodyParser.json());
//   app.use(cors());

//   return app;
// };

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(cors());

module.exports = app;
