
import React, { useEffect, useState } from "react";
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

    const [size, setSize] = useState({ widthVW: 50, heightVH: 64 });
    const [resizing, setResizing] = useState(false);


    //need to optimize


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

            if(resizing){
                const mouseX = e.clientX
                const mouseY = e.clientY

                const marginToResize = 10

                const topCords = Math.abs(mouseY - position.y) <= marginToResize
                const botCords = Math.abs(mouseY - (position.y + (size.heightVH/100*window.innerHeight))) <= marginToResize

                const leftCords = Math.abs(mouseX - position.x) <= marginToResize
                const rightCords = Math.abs(mouseX - (position.x + (size.widthVW/100*window.innerWidth))) <= marginToResize
                
                if (topCords) {
                    const newHeight = ((position.y + size.heightVH/100*window.innerHeight) - mouseY) / window.innerHeight * 100;
                
                    setPosition(prev => ({ ...prev, y: mouseY }));
                    setSize(prev => ({ ...prev, heightVH: newHeight }));
                }
                if (botCords) {
                    const newHeight = ((mouseY - position.y) / window.innerHeight) * 100;
                    console.log(newHeight)
                    setSize(prev => ({ ...prev, heightVH: newHeight }));
                }
                if (leftCords) {
                    const newWidth = ((position.x + size.widthVW/100*window.innerWidth) - mouseX) / window.innerWidth * 100;
                    setPosition(prev => ({ ...prev, x: mouseX }));
                    setSize(prev => ({ ...prev, widthVW: newWidth }));
                }
                if (rightCords) {
                    const newWidth = ((mouseX - position.x) / window.innerWidth) * 100;
                    setSize(prev => ({ ...prev, widthVW: newWidth }));
                }
            }
        };
            const stop = () => {
            setGrabing(false);
            setResizing(false);
            };

            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", stop);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
        };
    }, [grabing, resizing, compensation, position, size]);


        const content: { [key: string]: React.ReactNode } = {
        Profile: <Profile />,
        Contact: <Contact />,
        Projects: <Projects />,
        Configuration: <Configuration />,
        };

        const startResize = (e: React.MouseEvent) => {
            setResizing(true);
        }
    return (
        <>
        <div className="flex flex-col fixed rounded-[20px] select-none" style={{height:size.heightVH+"vh", width:size.widthVW + `vw`, left: position.x, top: position.y }} onMouseMove={movement} onMouseDown={startResize} > 
            <header className="bg-[rgba(50,66,71,1)] h-[4vh] rounded-t-[10px] flex cursor-move select-none p-[-2px]" onMouseDown={grabingElement} onMouseUp={ungrab} >
                <section className="w-[20%] flex ">
                    <img src={`/hotbar/${type}.svg`} alt="prueba" className="h-[70%] rounded-all place-self-center m-[5%]" />
                </section>
                <section className="w-[60%]">
                    <h2 className="text-[1.5rem] text-center text-[white]">{type}</h2>
                </section>
                <section className="w-[20%] flex justify-end">
                    <button className="w-[15%] place-self-center mr-[2%] bg-transparent border-transparent"><img src="windowsMenu/btnFullScreen.svg" alt="PantallaCompleta" className="w-[100%]" /></button>
                    <button onClick={close} className="w-[15%] place-self-center mr-[5%] bg-transparent border-transparent"><img src="windowsMenu/btnCloseWindow.svg" alt="BotonCierre" className="w-[100%]" /></button>
                </section>
            </header>
            <main className="bg-[rgba(255,255,255,0.95)] min-h[20vh] rounded-b-[10px] border-[2px] border-[rgba(50,66,71,1)] border-t-[0px] overflow-hidden">
                {content[type]}
            </main>
        </div>
        </>
    )
}