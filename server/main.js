const express = require("express")


const app = express();
var server = createServer(app);


server.listen(() => console.log("Were up"))