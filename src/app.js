const express = require('express');
require("../src/db/conns");
const MensRanking = require("../src/models/mensrace");
const router = require("../src/routers/menrouter");

const app = express();
const port = process.env.PORT || 8000
app.use(express.json());

app.use(router);

app.listen(port , ()=>{
    console.log(`successfully host on port ${port}`);
})