const express = require("express");
const mongoose = require("mongoose"); 
const { Usuario } = require('./models/userModel');

const { Book } = require('./models/bookModel');




const app = express();
app.use(express.json());



app.get("/books", async (req, res) => {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  });
  
//Mostrar Usuario
app.get("/users", async (req, res) => {
    const allUsers = await Usuario.find();
    return res.status(200).json(allUsers);
  });

  //Crear Usuario
app.post("/users", async (req, res) => {
    const nuevoUsuario = new Usuario({ ...req.body });
    const usuarioInsertado = await nuevoUsuario.save();
    return res.status(201).json(usuarioInsertado);
  });

  //Eliminar Usuario
  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    return res.status(200).json(usuarioEliminado);
  });

//Actualizar Usuario
  app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUserData = req.body;
  
    try {
      // Actualiza el usuario en la base de datos
      await Usuario.updateOne({ _id: id }, updatedUserData);
  
      // Recupera el usuario actualizado
      const updatedUser = await Usuario.findById(id);
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  });
  
  



  const start = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  start();