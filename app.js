const express =require("express");
const path = require("path");
const app =express();
const port ="3030";
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.use(express.static('public'));
app.listen(port,()=>console.log("servidor corriendo en el  puerto 3030"));