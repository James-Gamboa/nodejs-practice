const User = {
  get: (req, res) => {
    res.status(200).send("Este es un chanchito");
  },
  list: (req, res) => {
    res.status(200).send("Hola chanchito!");
  },
  create: (req, res) => {
    res.status(201).send("Creando un chanchito");
  },
  upadte: (req, res) => {
    res.status(204).send("actualizando chanchito");
  },
  destroy: (req, res) => {
    res.status(204).send("eliminando un chanchito");
  },
};

module.exports = User;