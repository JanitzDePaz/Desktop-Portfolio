import CreateCards from "../components/CreateCards"

let cards = [
    {id: 1, ProjectName: "Portfolio", description: "Esto es un portfolio estilo escritorio que he hecho porque me parece muy buena idea aunque no este saliendo muy bien", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 2, ProjectName: "100% Front", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 3, ProjectName: "Front + API", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 4, ProjectName: "FullStack", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 5, ProjectName: "Canvas", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 6, ProjectName: "Backend simple", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 7, ProjectName: "Backend+BBDD", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 8, ProjectName: "Proyecto final", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
]




export default function Projects (){
    return (
        <main className="flex flex-wrap w-[100%] h-[100%] justify-center align-center overflow-y-auto">
            {cards.map(card => {
                return(
                <CreateCards name={card.ProjectName} description={card.description} image={card.image} imageAlt={card.imageAlt} icons={card.technologies.map((tech, index) => (<img key={index} src={tech} alt="techLogo" className="w-[4vh] h-[4vh] hover:scale-[1.3]"/>))}/>
            )})}
        </main>
        
        
    )
}

