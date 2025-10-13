//cambiar textos

export default function Profile(){
    return(
     <main className="flex flex-col h-[100%] w-[100%] ">
        <section className="h-[50%] flex w-[100%]">
            <div className="flex flex-col justify-center items-center w-[30%]">
                <img src="public/hotbar/Profile.svg" alt="foto permil"  className="w-[25%] rounded-[50%] border-[1px] border-[black]"/>
                <a className="w-[25%]" href="https://github.com/JanitzDePaz?tab=repositories" target="_blank"><img className="w-[15vh] h-[8vh]" src="windows/github.png" alt="logo de github" /></a>
            </div>
            
            <div className="flex flex-col justify-center w-[70%]">
                <h1>Mi nombre</h1>
                <div>
                    <h2>¿Quien soy?</h2>
                <p className="w-[80%] text-justify">Mi objetivo es desarrollar aplicaciones web y experiencias interactivas que sean eficientes, accesibles y agradables para el usuario, combinando buen diseño con un código limpio y mantenible.</p>
                </div>
                <div>
                    <h2>Mi objetivo</h2>
                    <p className="w-[80%] text-justify">Mi objetivo es desarrollar aplicaciones web y experiencias interactivas que sean eficientes, accesibles y agradables para el usuario, combinando buen diseño con un código limpio y mantenible.</p>
                </div>
                
            </div>
        </section>
        <hr  className="mb-[3%] w-[80%] place-self-center"/>
        <section className="flex flex-col justify-center gap-[5%] align-center w-[100%]">
            <div className="flex justify-center gap-[4%] items-center text-justify">
                <img src="windows/react.svg" alt="logo de react" className="h-[8vh] w-[8vh]"/>
                <p className="w-[35vw]">Me encanta React porque permite crear componentes reutilizables y manejar el estado de manera eficiente, facilitando la creación de aplicaciones complejas con menos esfuerzo.</p>
            </div>
            <div className="flex justify-center gap-[4%] items-center text-justify">
                <img src="windows/tailwind.svg" alt="logo de tailwind" className="h-[8vh] w-[8vh]"/>
                <p className="w-[35vw]">Tailwind me permite diseñar interfaces modernas rápidamente, con clases utilitarias que aceleran el flujo de trabajo y mantienen el CSS limpio y organizado.</p>
            </div>
            <div className="flex justify-center gap-[4%] items-center text-justify" >
                <img src="windows/typescript.svg" alt="logo de typescript" className="h-[8vh] w-[8vh]"/>
                <p className="w-[35vw]">TypeScript me ayuda a escribir código más seguro y predecible, detectando errores antes de ejecutar la aplicación y mejorando la colaboración en proyectos grandes.</p>
            </div>
        </section>
     </main>
    )
}