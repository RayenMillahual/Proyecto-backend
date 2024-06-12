//modelos de bases de datos aquí si su proyecto
//involucra una base de datos. Estos modelos
//definen cómo se estructuran los datos en su aplicación
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
