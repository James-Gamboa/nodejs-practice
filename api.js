const express = require("express");
const user = require("./user.controller");
const app = express();
const port = 3000;

// Se agrega la ruta para obtener todos los usuarios
app.get("/", user.list);

// Se agrega la ruta para crear un nuevo usuario
app.post("/", user.create);

// Se agrega la ruta para obtener un usuario por su ID
app.get("/:id", user.get);

// Se agrega la ruta para actualizar un usuario por su ID
app.put("/:id", user.update);

// Se corrige la ruta para actualizar un usuario por su ID (se cambia "upadte" a "update")
app.patch("/:id", user.update);

// Se agrega la ruta para eliminar un usuario por su ID
app.delete("/:id", user.destroy);

// Se agrega una ruta para manejar las solicitudes a rutas no existentes
app.get("*", (req, res) => {
  res.status(404).send("Esta pagina no existe");
});

// Se agrega una ruta para manejar las solicitudes POST a rutas no existentes
app.post("*", (req, res) => {
  res.status(404).send("Esta pagina no existe");
});

// Se inicia la escucha del servidor en el puerto indicado
app.listen(port, () => {
  console.log("Arrancando la aplicacion");
});
