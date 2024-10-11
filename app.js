import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import alumnosController from './Backend/controller/alumnos.controller.js';

// activa el archivo env para la base de datos 
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(()=>{ 
    console.log("Funciona la conexion")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
});

//local serv
const app = express();
app.use(cors()); //seguridad del servidor local

app.listen(4000, ()=>{
    console.log("Se escucha correctamente")
})

//literalmente TEST, no lo pienses mucho, Diego
test()