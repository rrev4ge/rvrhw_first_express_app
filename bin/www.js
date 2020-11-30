const { request } = require('../app');

const http = require('http');

const { PORT } = require('../settings/CONSTANTS');
const app = require('../app');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`MESSAGE APP is running on port >> ${PORT}`);
});