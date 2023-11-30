const jwt = require('jsonwebtoken');
const config = require('config');
const JwtKey = config.get("secret.key");

function checkPermissions(allowedRoles) {
  return function(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, JwtKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbiddennnn
      }
      req.user = user; 

      const hasPermission = allowedRoles.includes(user._rol);
      if (!hasPermission) {
        return res.sendStatus(403); // Forbidden
      }

      
      next();
    });
  };
}

module.exports = checkPermissions;
