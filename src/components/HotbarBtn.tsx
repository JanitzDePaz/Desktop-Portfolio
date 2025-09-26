
type btnSchem = {
    icon: string, 
    alt: string,
    onClick?: ()=> void
}


export default function createBtn({icon, alt, onClick}: btnSchem){
    return(
            <button className="w-[8vh] h-[8vh] bg-transparent border-none hover:bg-[#1b5798]" onClick={onClick}>
                <img className="cursor-pointer" src={icon} alt={alt} />
            </button>
    )
}