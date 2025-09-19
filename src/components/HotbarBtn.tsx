
type esquemaBotones = {
    icono: string, 
    alt: string,
    onClick?: ()=> void
}


export default function CrearBotones({icono, alt, onClick}: esquemaBotones){
    return(
            <button className="w-[8vh] h-[8vh] bg-transparent border-none hover:bg-[#1b5798]" onClick={onClick}>
                <img className="cursor-pointer" src={icono} alt={alt} />
            </button>
    )
}