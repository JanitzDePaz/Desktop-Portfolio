//En este archivo se usan los modulos CrearBotones y Ventanas

//CrearBotones: crea un boton con unos estilos y valores especificos que se modifican desde el array botones de este archivo.
//              Añadiendo un objeto a este array con los datos necesarios creara un boton funcional que abrira una ventana.

//Ventana: el modulo Ventana funciona mediante un useState que detecta si su valor cambia. Esto mediante un onClick en el 
//         valor del boton hago que cambie el valor del useState y con ello hago que se ejecute el modulo de Ventana con el texto
//         que yo elijo para que luego en el propio modulo de ventana estila una ventana con la información que yo quiera.


import CreateBtn from "./HotbarBtn"
import Windows from "./Window"
import { useState } from "react";



export default function Nav(){
        const [activeWindow, setActiveWindow] = useState<string[]>([]);
        let btnInfo = [
        {id: 1, icon: "./hotbar/Profile.svg", alt:"Profile"},
        {id: 2, icon: "./hotbar/Projects.svg", alt:"Projects"},
        {id: 3, icon: "./hotbar/Contact.svg", alt:"Contact"},
        {id: 4, icon: "./hotbar/Configuration.svg", alt:"Configuration"}
        ]

        const openWindows = (type: string) => {if(!activeWindow.includes(type)){
            setActiveWindow([...activeWindow, type])
        }}

        //revisar, funciona pero se cambia posiciones de las ventanas
        const closeWindows = (window: number) => setActiveWindow(activeWindow.filter((unused, i) => i !== window))
    return(
        <nav className=" fixed bottom-[0] h-[8vh] w-screen flex flex-row bg-[rgba(50,66,71,1)] border-t-[2px] border-[#3270ad]">
            {btnInfo.map((btn) => {
                return (
                    <CreateBtn key={btn.id} icon={btn.icon} alt={btn.alt} onClick={()=>openWindows(btn.alt)}/>
                )
            })}
            {activeWindow.map((type, i)=> (
                <Windows
                key={i}
                type={type}
                close={() => closeWindows(i)}
                />
            ))}
        </nav>
    )
}
