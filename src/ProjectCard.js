import './App.css';

const ProjectCard = (props) => {
    return (
        <div className="bg-white rounded-2xl w-2/5 pb-5 shadow-2xl mr-5 mb-5">
            <img className="rounded-t-2xl" src={props.project.imageUrl} alt="pokemon" />
            <div className="mx-3 my-3 font-bold">
                {props.project.name}
            </div>
            <div className="mx-3 my-3">
                {props.project.description}
            </div>
            <a href="" className="underline text-blue-500 mx-3">See More -></a>
        </div>
    );
}

export default ProjectCard;