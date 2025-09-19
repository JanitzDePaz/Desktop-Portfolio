type tipoVentana= {
    tipo: String;
}

export default function Ventanas({tipo}: tipoVentana){
    return (
        <>
        <div className="flex flex-col bg-[white] w-[100vh] h-[70vh] fixed top-[10%] left-[25%] rounded-[20px] ">
            <header className="bg-[rgba(50,66,71,1)] h-[6%] rounded-t-[20px] border-b-[4px] border-[black] flex">
                <section className="w-[20%] flex ">
                    <img src={`/hotbar/${tipo}.svg`} alt="prueba" className="h-[70%] rounded-all place-self-center m-[5%]" />
                </section>
                <section className="w-[60%]">
                    <h2 className="text-[1.5rem] text-center font-[kanit] text-[white]">{tipo}</h2>
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