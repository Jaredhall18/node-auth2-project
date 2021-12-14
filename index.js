require('dotenv').config()

const server = require('./api/server.js');

const {PORT} = require('./config/index')

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
