const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // Genera una cadena hexadecimal de 32 bytes
};

const secretKey = generateSecretKey();
console.log('Secret Key:', secretKey);
