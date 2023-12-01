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
        //retorna un error 403 en json con un mensaje de error
        return res.status(403).json({
          message: "fallo1",

          obj:err
        });
      }
      req.user = user; 
      console.log("Esto es user", user.rol)
      console.log("Esto es userr", user)

      const hasPermission = allowedRoles.includes(user.rol);
      if (!hasPermission) {

        return res.status(403).json({
                  message: "fallo2",
                  message2: user.rol,
                  obj:err
                });    
                }

      
      next();
    });
  };
}

module.exports = checkPermissions;
