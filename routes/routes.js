const express = require("express");
const Routes = express();
const service = require('./../service/service');

Routes.get('/get-users', async (req, res)=>{
    const data = await service.getUsers();
    res.send({data: data});
})


module.exports = Routes;