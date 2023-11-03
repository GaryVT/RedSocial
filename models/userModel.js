// models/bookModel.js

const mongoose = require("mongoose");


const esquemaUsuario = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  fecha_registro: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },

  // Otros campos relacionados con los libros aquí
});

//const Book = mongoose.model('Book', bookSchema);
const Usuario = mongoose.model("Usuario", esquemaUsuario);

module.exports = { Usuario };
