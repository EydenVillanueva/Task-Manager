import config from '../config/config';
import app from './app';

(async () => {
  // TODO: initialize database connection here

  const port = config.server.PORT;
  app.listen(port, () => {
    console.log(`task manager is up and running on port ${port}!`);
  });
})();
