import React from 'react';


const Work = ({projects}) =>{
    return(
        <div className="work_container">
            <h1>Projects.</h1>
            <div className="projects_container">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <div className="image">
                            <a href={project.url}>
                                <img src={project.imageSrc} alt={project.title}/>
                            </a>
                        </div>
                        <div className="title">
                            <strong>{project.title}</strong><br/>
                            {project.short}
                            <a className="git-color" href={project.git}>(Git)</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
