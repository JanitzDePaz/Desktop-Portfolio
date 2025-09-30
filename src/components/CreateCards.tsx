import type React from "react"

type cards = {
    name: string,
    description: string,
    image: string,
    imageAlt: string,
    icons: React.ReactElement[]
}

export default function CreateCards({name, description, image, imageAlt, icons}:cards){
    return(
        <article className="flex flex-col justify-around items-center w-[15vw] h-[35vh] bg-[white] border-[#3270ad] border-[1px] rounded-[16px] overflow-hidden m-[1%]">
            <img src={image} alt={imageAlt} className="h-[16vh] w-[100%]"/>
            <div className="h-[19vh] w-[15vw] flex flex-col justify-between">
                <h1 className="h-[15%] text-[1.7rem] text-center">{name}</h1>
                <p className="h-[45%] text-justify mx-[7%] overflow-y-auto">{description}</p>
                <div className="flex justify-around content-center h-[25%]">
                    {icons}
                </div>
            </div>
        </article>
    )
}