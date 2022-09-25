require('./config/env');
const { db } = require('./config/database');
const { httpServer } = require('./config/http');
const { initModels } = require('./models/initModels');

const initServer = async () => {
  try {
    await db.authenticate();
    initModels();
    await db.sync({ force: false });
    httpServer.listen(process.env.PORT, () => {
      console.log(`Servidor montando en el puerto ${process.env.PORT}`);
    });
  } catch (error) {
    httpServer.close(() => console.log(error));
  }
};

initServer();
