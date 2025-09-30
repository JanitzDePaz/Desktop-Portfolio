import CreateCards from "../components/CreateCards"

let cards = [
    {id: 1, ProjectName: "Portfolio", description: "Esto es un portfolio estilo escritorio que he hecho porque me parece muy buena idea aunque no este saliendo muy bien", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 2, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 3, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 4, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 5, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 6, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 7, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
    {id: 8, ProjectName: "Project1", description: "The description of this projects in 2 lanes", image: "./windows/projects/project1.png", imageAlt: "project1", technologies: ["./windows/react.svg","./windows/tailwind.svg", "./windows/typescript.svg" ]},
]




export default function Projects (){
    return (
        <main className="flex flex-wrap w-[50vw] min-h-[60vh] justify-center align-center ">
            {cards.map(card => {
                return(
                <CreateCards name={card.ProjectName} description={card.description} image={card.image} imageAlt={card.imageAlt} icons={card.technologies.map((tech, index) => (<img key={index} src={tech} alt="techLogo" className="w-[4vh] h-[4vh]"/>))}/>
            )})}
        </main>
        
        
    )
}

