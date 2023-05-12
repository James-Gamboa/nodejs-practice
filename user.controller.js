const User = {
  get: (req, res) => {
    res.status(200).send("Este es un chanchito"); // La solicitud se ha procesado correctamente y se devuelve un recurso.
  },
  list: (req, res) => {
    res.status(200).send("Hola chanchito!"); // La solicitud se ha procesado correctamente y se devuelve un recurso.
  },
  create: (req, res) => {
    res.status(201).send("Creando un chanchito"); // La solicitud se ha completado y se ha creado un nuevo recurso.
  },
  upadte: (req, res) => {
    res.status(204).send("actualizando chanchito"); // La solicitud se ha procesado correctamente, pero actualiza  contenido para devolver.
  },
  destroy: (req, res) => {
    res.status(204).send("eliminando un chanchito"); // La solicitud se ha procesado correctamente, pero se elimina el  contenido para devolver.
  },
};

module.exports = User;
