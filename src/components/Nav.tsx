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
