export default function Perfil(){
    return(
        <div className="flex mt-[4%] justify-center">
            <section className="w-[20vh]">
                <img src="hotbar/Perfil.svg" alt="mi foto" className="w-[100%]" />
                <img src="" alt="" />
                <img src="" alt="" />
            </section>
            
            <section className="w-[80vh]">
                <h1>Janitz De Paz  -  Estudiante de desarrollo web</h1>
                <div className="flex flex-col">
                    <h2>¿Quien soy?</h2>
                    <hr className=" w-[70%]" />
                    <p className="text-[1.2rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, doloribus. Accusantium, quae! Dolores laborum eum et error aperiam! Deserunt aliquam nesciunt consectetur magnam vitae nihil ea beatae laborum. Repellat, ut.</p>
                </div>
                <div className="mt-[2%]">
                    <h2>¿Cual es mi objetivo?</h2>
                    <hr />
                    <p className="text-[1.2rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam alias placeat dolorem veniam aut rerum quibusdam, magni facere, odio illo commodi sequi. Consectetur cum perferendis corrupti, quasi provident quidem!</p>
                </div>
            </section>
            <section className="flex-1/2"></section>
        </div>
    )
}