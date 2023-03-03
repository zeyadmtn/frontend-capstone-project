import "./App.css";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
    const projectDetails = [
        {
            name: 'Pokemon Glossary',
            imageUrl: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
            description: 'This project is a pokemon glossary project made with React Native and uses the PokeAPI to fetch pokemon data and display it to the user.',
        },
        {
            name: 'Venue Booking System',
            imageUrl: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            description: 'A venue booking system created with React, Redux, and Firebase that allows students to book college venues.',
        },
        {
            name: 'World Clock App',
            imageUrl: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'An app that shows clocks from different countries around the world, created with Flutter and Firebase.',
        },
        {
            name: 'Ecommerce Website',
            imageUrl: 'https://images.unsplash.com/photo-1625296276703-3fbc924f07b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'An ecommerce website for a clothing brand made with React and Redux',
        }
    ];

    return (
        <div className="w-full bg-teal-700 px-20 py-10" id="myProjects">
            <div className="text-center text-white text-4xl mb-10">My Projects</div>
            <div className="flex flex-row flex-wrap justify-center">
                {projectDetails.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </div>


        </div>
    );
}

export default MyProjects;