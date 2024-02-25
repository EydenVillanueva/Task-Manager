import config from "../config/config.js";
import app from './app.js';

(async () => {
  // TODO: initialize database connection here

  const port = config.server.PORT;
  app.listen(port, () => {
    console.log(`task manager is up and running on port ${port}!`)
  });
})()
