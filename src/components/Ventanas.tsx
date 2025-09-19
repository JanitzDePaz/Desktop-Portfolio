type tipoVentana= {
    tipo: String;
}


export default function Ventanas({tipo}: tipoVentana){
    console.log(tipo)
    return (
        <>
        <div className="flex flex-col bg-[white] w-[100vh] h-[70vh] fixed top-[10%] left-[25%] rounded-[20px]">
            <header className="bg-[rgba(133,247,222,1)] h-[6%] rounded-t-[20px] border-b-[4px] border-[black] flex">
                <section className="w-[20%]">
                    Ejemplo
                </section>
                <section className="w-[60%]">
                    <p className="text-xl text-center font-[sans]">{tipo}</p>
                </section>
                <section className="w-[20%]">
                    Ejemplo
                </section>
            </header>
            <main className="bg-[rgba(255,255,255,0.5)] h-[94%] rounded-b-[20px] border-[2px] border-[rgba(133,247,222,1)]"></main>
        </div>
        
        </>
        
    )
}