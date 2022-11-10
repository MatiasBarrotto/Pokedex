const { Router } = require('express');

const statRouter = Router();

statRouter.get("/", (req,  res) =>{
    res.send("Estos son los stats");
});

module.exports = statRouter;
