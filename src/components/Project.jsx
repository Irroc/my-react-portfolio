import "../styles/Project.css"
export default function Portfolio(props) {
    return (
        <div className="projects" key={props.projects.id}>
            <a className="link" href={props.projects.link}>
            <img className="projectsImg" src={props.projects.img}></img></a>
            <p className="projectsDesc">{props.projects.description}</p>
        </div>
    );
}
