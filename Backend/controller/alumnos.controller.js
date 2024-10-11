import { modeloAlumnos } from "../models/alumnos.controller.js";

modeloAlumnos.create({
    name:"Diego",
    apepat: "Salvador",
    edad: 21
});


export const test = ()=>{
    console.log("Funcionando")
}