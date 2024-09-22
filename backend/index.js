//Importa la librería express
const express = require("express");

const cors = require("cors");

// Comenzamos a usar express usando la constante app
const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

// endpoint que escucha en localhost:8080 y devuelve un json
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Iniciamos Sequelize aplicando lo implementado en models.index.js
const db = require("./models");
db.sequelize.sync({ alter: true}).then(() => {
    console.log("Alter and re-sync db.")
});

app.get("/", (req, res) => {
    res.json({message: "Welcome to bicycles application."});
});

require("./routes/bicycle.routes")(app);

//Configurar nuestra API, puerto que escuchará las solicitudes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
});