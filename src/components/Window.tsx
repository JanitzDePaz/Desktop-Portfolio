
import { useEffect, useState } from "react";
import Profile from "../data/Profile";
import Contact from "../data/Contact";
import Projects from "../data/Projects";
import Configuration from "../data/Configuration";

type windowType= {
    type: string,
    close: ()=> void,
}

export default function Windows({type, close}: windowType){
    const [grabing, setGrabing] = useState(false);
    const [position, setPosition] = useState({x:200, y: 200})
    const [compensation, setCompensation] = useState({x:0, y:0})

    const grabingElement = (e: React.MouseEvent) => {
        setGrabing(true);
        setCompensation({ x: e.clientX - position.x, y: e.clientY - position.y })
    }

    const ungrab= () => {
        setGrabing(false);
    }

    const movement = (e: React.MouseEvent) => {
        if(grabing == true){
        setPosition({ x: e.clientX - compensation.x, y: e.clientY - compensation.y })
    }}

    useEffect(() => {
    const ungrab = () => setGrabing(false);
    window.addEventListener("mouseup", ungrab);
    return () => window.removeEventListener("mouseup", ungrab);
    }, []);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (grabing) {
                setPosition({ x: e.clientX - compensation.x, y: e.clientY - compensation.y });
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
        }, [grabing, compensation]);


        const content: { [key: string]: React.ReactNode } = {
        Profile: <Profile />,
        Contact: <Contact />,
        Projects: <Projects />,
        Configuration: <Configuration />,
        };
    return (
        <>
        <div className="flex flex-col w-[50vw] h-[64vh] fixed rounded-[20px]" style={{ left: position.x, top: position.y }} onMouseMove={movement} >
            <header className="bg-[rgba(50,66,71,1)] h-[4vh] rounded-t-[10px] border-b-[4px] border-[black] flex cursor-move select-none" onMouseDown={grabingElement} onMouseUp={ungrab} >
                <section className="w-[20%] flex ">
                    <img src={`/hotbar/${type}.svg`} alt="prueba" className="h-[70%] rounded-all place-self-center m-[5%]" />
                </section>
                <section className="w-[60%]">
                    <h2 className="text-[1.5rem] text-center text-[white]">{type}</h2>
                </section>
                <section className="w-[20%] flex justify-end">
                    <button className="w-[15%] place-self-center mr-[2%] bg-transparent border-transparent"><img src="/menuVentanas/btnPantallaCompleta.svg" alt="PantallaCompleta" className="w-[100%]" /></button>
                    <button onClick={close} className="w-[15%] place-self-center mr-[5%] bg-transparent border-transparent"><img src="/menuVentanas/btnCerrarVentana.svg" alt="BotonCierre" className="w-[100%]" /></button>
                </section>
            </header>
            <main className="bg-[rgba(255,255,255,0.95)] h-[60vh] w-[50vw] rounded-b-[10px] border-[2px] border-[#3270ad] overflow-y-auto">
                {content[type]}
            </main>
        </div>
        </>
    )
}