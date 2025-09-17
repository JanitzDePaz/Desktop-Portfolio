function Nav(){
    return(
        <nav className="bg-[#404040] fixed bottom-[0] h-[8vh] w-screen flex flex-row">
            <button className="hotbar__btn"><img src="./public/hotbar/perfil.svg" alt="Perfil" className="hotbar__img"/></button>
            <button className="hotbar__btn"><img src="./public/hotbar/proyectos.svg" alt="Perfil" className="hotbar__img"/></button>
            <button className="hotbar__btn"><img src="./public//hotbar/contacto.svg" alt="Perfil" className="hotbar__img"/></button>
            <button className="hotbar__btn"><img src="./public/hotbar/configuracion.svg" alt="Perfil" className="hotbar__img"/></button>
        </nav>
    )
}

export default Nav