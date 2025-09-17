type esquemaBotones = {
    icono: string, 
    alt: string
}


export default function CrearBotones({icono, alt}: esquemaBotones){
    return(
        <button className="w-[8vh] h-[8vh] bg-transparent border-none">
            <img className="cursor-pointer" src={icono} alt={alt} />
        </button>
    )
}