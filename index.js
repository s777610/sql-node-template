const app = require('./src/app.js');
const { sqlConfig } = require('./src/config');
const pool = require('./src/pool');

pool
  .connect(sqlConfig)
  .then(() => {
    app().listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => console.log({ err }));
