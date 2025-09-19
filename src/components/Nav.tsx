//En este archivo se usan los modulos CrearBotones y Ventanas

//CrearBotones: crea un boton con unos estilos y valores especificos que se modifican desde el array botones de este archivo.
//              Añadiendo un objeto a este array con los datos necesarios creara un boton funcional que abrira una ventana.

//Ventana: el modulo Ventana funciona mediante un useState que detecta si su valor cambia. Esto mediante un onClick en el 
//         valor del boton hago que cambie el valor del useState y con ello hago que se ejecute el modulo de Ventana con el texto
//         que yo elijo para que luego en el propio modulo de ventana estila una ventana con la información que yo quiera.


import CrearBotones from "./HotbarBtn"
import Ventanas from "./Ventanas"
import { useState } from "react";



export default function Nav(){
        const [ventanaActiva, setVentanaActiva] = useState("");
        let infoBotones = [
        {icono: "./public/hotbar/Perfil.svg", alt:"Perfil", onclick: ()=> setVentanaActiva("Perfil")},
        {icono: "./public/hotbar/Proyectos.svg", alt:"Proyectos", onclick: ()=> setVentanaActiva("Proyectos")},
        {icono: "./public/hotbar/Contacto.svg", alt:"Contacto", onclick: ()=> setVentanaActiva("Contacto")},
        {icono: "./public/hotbar/Configuracion.svg", alt:"Configuracion", onclick: ()=> setVentanaActiva("Configuracion")}
]
    return(
        <nav className=" fixed bottom-[0] h-[8vh] w-screen flex flex-row bg-[rgba(181,255,237,0.95)] border-t-[3px] border-[rgba(255,255,255,0.8)]">
            {infoBotones.map((boton) => {
                return (
                    <CrearBotones icono={boton.icono} alt={boton.alt} onClick={boton.onclick}/>
                )
            })}
            {ventanaActiva && <Ventanas tipo={ventanaActiva} />}
            
            
        </nav>
    )
}
