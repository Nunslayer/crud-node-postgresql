const { jwtVerify } = require('jose');

const userJWTDTO = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send('Usuario no autorizado 1');
  const jwt = authorization.split(' ')[1];
  if (!jwt) return res.status(401).send('Usuario no autorizado 2');
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      jwt,
      encoder.encode(process.env.PRIVATE_KEY_JWT)
    );
    req.id = payload.id;
    req.status = payload.status;
    next();
  } catch (error) {
    return res.status(401).send('Usuario no autorizado 3');
  }
};

module.exports = { userJWTDTO };
