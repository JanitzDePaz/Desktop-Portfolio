import CrearBotones from "./HotbarBtn"
import perfil from "../assets/hotbar/perfil.svg"
import proyectos from "../assets/hotbar/proyectos.svg"
import contacto from "../assets/hotbar/contacto.svg"
import configuracion from "../assets/hotbar/configuracion.svg"
import Ventanas from "./Ventanas"
import { useState } from "react";



export default function Nav(){
        const [ventanaActiva, setVentanaActiva] = useState(String);
        let botones = [
        {icono: perfil, alt:"perfil", onclick: ()=> setVentanaActiva("perfil")},
        {icono: proyectos, alt:"proyectos", onclick: ()=> setVentanaActiva("proyectos")},
        {icono: contacto, alt:"contacto", onclick: ()=> setVentanaActiva("contacto")},
        {icono: configuracion, alt:"configuracion", onclick: ()=> setVentanaActiva("configuracion")},
        {icono: configuracion, alt:"configuracion", onclick: ()=> setVentanaActiva("configura")},
        {icono: configuracion, alt:"configuracion", onclick: ()=> setVentanaActiva("configuracion")},
        {icono: configuracion, alt:"configuracion", onclick: ()=> setVentanaActiva("configura")}
]
    return(
        // revisar el estilo del nav (copiado gpt)
        <nav className=" fixed bottom-[0] h-[8vh] w-screen flex flex-row bg-[rgba(181,255,237,0.95)] border-t-[3px] border-[rgba(255,255,255,0.8)]">
            {botones.map((boton) => {
                return (
                    <CrearBotones icono={boton.icono} alt={boton.alt} onClick={boton.onclick}/>
                )
            })}
            {<Ventanas tipo={ventanaActiva}/>}
            
            
        </nav>
    )
}
