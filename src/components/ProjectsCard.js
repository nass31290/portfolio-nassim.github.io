import {Col, Container, Tab} from "react-bootstrap";
import github from "../assets/img/github.png";
import web from "../assets/img/site-internet.png"


export const ProjectsCard = ({title, description, imgUrl,websiteUrl, githubUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <div className="project-icons">
                {websiteUrl && (
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" title="Visitez le site web du projet">
                    <img src={web} />
                </a>
                )}
                {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="Visitez le GitHub du projet">
                    <img src={github} />
                </a>
                )}
                </div>
            </div>
        </Col>
    )
}