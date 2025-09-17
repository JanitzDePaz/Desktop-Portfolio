import CrearBotones from "./CrearBotones"
import perfil from "../assets/hotbar/perfil.svg"
import proyectos from "../assets/hotbar/proyectos.svg"
import contacto from "../assets/hotbar/contacto.svg"
import configuracion from "../assets/hotbar/configuracion.svg"

export default function Nav(){
    return(
        <nav className=" fixed bottom-[0] h-[8vh] w-screen flex flex-row bg-[rgba(50,93,212,0.63)] backdrop-blur-xl border-t-[3px] border-[rgba(255,255,255,0.8)]">
            <CrearBotones icono={perfil} alt="perfil"/>
            <CrearBotones icono={proyectos} alt="perfil"/>
            <CrearBotones icono={contacto} alt="perfil"/>
            <CrearBotones icono={configuracion} alt="perfil"/>
        </nav>
    )
}
