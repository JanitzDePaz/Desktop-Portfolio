import { Rnd } from "react-rnd";
import ReactDOM from "react-dom"
import Profile from "../data/Profile";
import Contact from "../data/Contact";
import Projects from "../data/Projects";
import Configuration from "../data/Configuration";

type windowType= {
    type: string,
    close: ()=> void,
}

export default function Windows({type, close}: windowType){


        const content: { [key: string]: React.ReactNode } = {
        Profile: <Profile />,
        Contact: <Contact />,
        Projects: <Projects />,
        Configuration: <Configuration />,
        };

        return ReactDOM.createPortal(
        <Rnd
            default={{ x: 0 /*(25*window.innerWidth)/100*/, y:0 /*(20*window.innerHeight)/100*/, width: (100*window.innerWidth)/100, height: (92*window.innerHeight)/100 }}
            minWidth={(10*window.innerWidth)/100}
            minHeight={(10*window.innerHeight)/100}
            maxWidth={(100*window.innerWidth)/100}
            maxHeight={(92*window.innerHeight)/100}
            bounds="window"
            dragHandleClassName="grab-header"
            className="bg-[transparent] flex flex-col"
        >
            <header className="grab-header bg-[rgba(50,66,71,1)] h-[4vh] rounded-t-[10px] flex cursor-move select-none p-[-2px]">
                <section className="w-[20%] flex ">
                    <img src={`/hotbar/${type}.svg`} alt="prueba" className="h-[70%] rounded-all place-self-center m-[5%]" />
                </section>
                <section className="w-[60%]">
                    <h2 className="text-[1.5rem] text-center text-[white]">{type}</h2>
                </section>
                <section className="w-[20%] flex justify-end">
                    <button className="w-[3vh] place-self-center mr-[2%] bg-transparent border-transparent"><img src="windowsMenu/btnFullScreen.svg" alt="PantallaCompleta" className="w-[100%]" /></button>
                    <button onClick={close} className="w-[3vh] place-self-center mr-[5%] bg-transparent border-transparent"><img src="windowsMenu/btnCloseWindow.svg" alt="BotonCierre" className="w-[100%]" /></button>
                </section>
            </header>
            <main className="bg-[rgba(255,255,255,0.95)] rounded-b-[10px] border-[2px] border-[rgba(50,66,71,1)] border-t-[0px] overflow-hidden h-[calc(100%-4vh)]">
                {content[type]}
            </main>
        </Rnd>
        , document.getElementById('root') as HTMLElement
    )
        
    
}