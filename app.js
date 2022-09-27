const express = require("express");
const app = express();
const path= require("path");
const publicPath= path.resolve(__dirname, "./public");
app.use(express.estatic(publicPath));

app.listen(3090,() => { 

    console.log("Servidor corriendo")
})
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"/proyectom/home.html"))
})

