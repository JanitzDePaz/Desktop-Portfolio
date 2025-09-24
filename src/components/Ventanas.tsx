
import { useEffect, useState } from "react";
import Perfil from "../data/Perfil";
import Contacto from "../data/Contacto";
import Proyectos from "../data/Proyectos";
import Configuracion from "../data/Configuracion";

type tipoVentana= {
    tipo: string,
    cerrar: ()=> void,
}

export default function Ventanas({tipo, cerrar}: tipoVentana){
    const [agarrado, setAgarrando] = useState(false);
    const [posicion, setPosicion] = useState({x:200, y: 200})
    const [compensacion, setCompensacion] = useState({x:0, y:0})

    const elementoAgarrado = (e: React.MouseEvent) => {
        setAgarrando(true);
        setCompensacion({ x: e.clientX - posicion.x, y: e.clientY - posicion.y })
    }

    const elementoSoltado= () => {
        setAgarrando(false);
    }

    const movimiento = (e: React.MouseEvent) => {
        if(agarrado == true){
        setPosicion({ x: e.clientX - compensacion.x, y: e.clientY - compensacion.y })
    }}

    useEffect(() => {
    const soltar = () => setAgarrando(false);
    window.addEventListener("mouseup", soltar);
    return () => window.removeEventListener("mouseup", soltar);
    }, []);

    useEffect(() => {
        const mover = (e: MouseEvent) => {
            if (agarrado) {
                setPosicion({ x: e.clientX - compensacion.x, y: e.clientY - compensacion.y });
            }
        };
        window.addEventListener("mousemove", mover);
        return () => window.removeEventListener("mousemove", mover);
        }, [agarrado, compensacion]);


        const contenidos: { [key: string]: React.ReactNode } = {
        Perfil: <Perfil />,
        Contacto: <Contacto />,
        Proyectos: <Proyectos />,
        Configuracion: <Configuracion />,
        };
    return (
        <>
        <div className="flex flex-col bg-[white] w-[50vw] h-[64vh] fixed rounded-[20px]" style={{ left: posicion.x, top: posicion.y }} onMouseMove={movimiento} >
            <header className="bg-[rgba(50,66,71,1)] h-[4vh] rounded-t-[20px] border-b-[4px] border-[black] flex cursor-move select-none" onMouseDown={elementoAgarrado} onMouseUp={elementoSoltado} >
                <section className="w-[20%] flex ">
                    <img src={`/hotbar/${tipo}.svg`} alt="prueba" className="h-[70%] rounded-all place-self-center m-[5%]" />
                </section>
                <section className="w-[60%]">
                    <h2 className="text-[1.5rem] text-center text-[white]">{tipo}</h2>
                </section>
                <section className="w-[20%] flex justify-end">
                    <button className="w-[15%] place-self-center mr-[2%] bg-transparent border-transparent"><img src="/menuVentanas/btnPantallaCompleta.svg" alt="PantallaCompleta" className="w-[100%]" /></button>
                    <button onClick={cerrar} className="w-[15%] place-self-center mr-[5%] bg-transparent border-transparent"><img src="/menuVentanas/btnCerrarVentana.svg" alt="BotonCierre" className="w-[100%]" /></button>
                </section>
            </header>
            <main className="bg-[rgba(255,255,255,0.5)] h-[60vh] w-[100%] rounded-b-[20px] border-[2px] border-[rgba(133,247,222,1)] overflow-y-auto">
                {contenidos[tipo]}
            </main>
        </div>
        </>
    )
}