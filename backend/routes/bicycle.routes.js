module.exports = app => {
    const bicycles = require("../controllers/bicycle.controllers.js");

    // Aquí llamamos a la función Router() correctamente
    var router = require("express").Router();

    // Crear una nueva bicicleta
    router.post("/", bicycles.create);

    // Obtener todas las bicicletas
    router.get("/", bicycles.findAll);

    // Obtener una bicicleta por id (aquí debes incluir el parámetro `id` en la ruta)
    router.get("/:id", bicycles.findOne);

    // Actualizar una bicicleta por id (también necesitas el parámetro `id` en la ruta)
    router.put("/:id", bicycles.update);

    // Eliminar una bicicleta por id (también se requiere el `id`)
    router.delete("/:id", bicycles.delete);

    // Eliminar todas las bicicletas
    router.delete("/", bicycles.deleteAll);

    // Prefijo para todas las rutas
    app.use('/api/bicycles', router);
};
