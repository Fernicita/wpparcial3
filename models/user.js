const mongoose = require('mongoose');
const roles = require('./roles')

const schema = mongoose.Schema({
    _email: String,
    _password: String,
    _salt: String,
    _rol: { type: String, enum: Object.keys(roles), default: 'user' }
});

class User {
    constructor(email, password, salt, rol = 'developer') {
        this._email = email;
        this._password = password;
        this._salt = salt;
        this._rol = rol;
    }

    get email() { return this._email; }
    set email(v) { this._email = v; }

    get password() { return this._password; }
    set password(v) { this._password = v; }

    get salt() { return this._salt; }
    set salt(v) { this._salt = v; }

    get rol() { return this._rol; }
    set rol(v) { this._rol = v; }
}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);
