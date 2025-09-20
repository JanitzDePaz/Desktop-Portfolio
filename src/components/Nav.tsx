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
        const [ventanaActiva, setVentanaActiva] = useState<string[]>([]);
        let infoBotones = [
        {id: 1, icono: "./hotbar/Perfil.svg", alt:"Perfil"},
        {id: 2, icono: "./hotbar/Proyectos.svg", alt:"Proyectos"},
        {id: 3, icono: "./hotbar/Contacto.svg", alt:"Contacto"},
        {id: 4, icono: "./hotbar/Configuracion.svg", alt:"Configuracion"}
        ]

        const abrirVentanas = (tipo: string) => {if(!ventanaActiva.includes(tipo)){
            setVentanaActiva([...ventanaActiva, tipo])
        }}
        const cerrarVentanas = (ventana: number) => setVentanaActiva(ventanaActiva.filter((vacio, i) => i !== ventana))
    return(
        <nav className=" fixed bottom-[0] h-[8vh] w-screen flex flex-row bg-[rgba(181,255,237,0.95)] border-t-[3px] border-[rgba(255,255,255,0.8)]">
            {infoBotones.map((boton) => {
                return (
                    <CrearBotones key={boton.id} icono={boton.icono} alt={boton.alt} onClick={()=>abrirVentanas(boton.alt)}/>
                )
            })}
            {ventanaActiva.map((tipo, i)=> (
                <Ventanas 
                key={i}
                tipo={tipo}
                cerrar={() => cerrarVentanas(i)}
                />
            ))}
        </nav>
    )
}
