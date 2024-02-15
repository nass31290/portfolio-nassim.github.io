import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import projImg1 from "../assets/img/logo.svg"
import projImg2 from "../assets/img/logo.svg"
import projImg3 from "../assets/img/logo.svg"
import colorSharp2 from "../assets/img/color-sharp2.png"



export const Projects = () => {
    const projects = [
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "https://mdbootstrap.com/docs/react/navigation/footer/",
            githubUrl: "http://github.com/example",
        },
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "http://example.com",
            githubUrl: "http://github.com/example",
        },
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "http://example.com",
            githubUrl: "http://github.com/example",
        },
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "http://example.com",
            githubUrl: "http://github.com/example",
        },
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "http://example.com",
            githubUrl: "http://github.com/example",
        },
        {
            title: "zz",
            description: "Design & Development",
            imgUrl: projImg1,
            websiteUrl: "http://example.com",
            githubUrl: "http://github.com/example",
        },
        
    ];

    return (   
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projets réalisés</h2>
                        <p>Voici la liste des projets que j'ai pu réaliser seul ou en équipe.</p>                       
                            <Row>
                                    {
                                        projects.map((project,index) => {
                                            return(
                                                <ProjectsCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}