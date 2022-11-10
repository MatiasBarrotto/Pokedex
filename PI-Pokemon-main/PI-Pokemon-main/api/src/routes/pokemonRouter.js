const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

pokemonRouter.get("/", (req, res) => {
    res.send("Estoy en la ruta pokemon");
});

module.exports = pokemonRouter;


// localhost:3000 => se abre app React
// localhost:3000/pokemon
//
// useEffect => dispatch(action)
// action retornar una function{
//  fetch("localhost:3001/pokemon")
//  .then(response=>response.json())
// }
// componente pokemon se renderiza cards