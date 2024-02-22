import { Container, Row, Col} from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
/* 440*300 dimensions https://www.iloveimg.com/fr/recadrer-image */
import projImg1 from "../assets/img/sitekeycloak.png"
import projImg2 from "../assets/img/dailygreen.png"
import projImg3 from "../assets/img/securebaby.png"
import projImg4 from "../assets/img/mirth.png"
import projImg5 from "../assets/img/rgpd.png"
import projImg6 from "../assets/img/sanboi.png"
import projImg7 from "../assets/img/esms.png"
import projImg8 from "../assets/img/portfolio.png"
import projImg9 from "../assets/img/memoirel3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import { logDOM } from "@testing-library/react";



export const Projects = () => {
    const projects = [
        {
            title: "Keycloak",
            description: "Implémentation d'un prototype utilisant Keycloak et Node.js pour un système de gestion des notes dans une formation universitaire en appliquant la politique RBAC (Cybersécurité - JavaScript - EJS)",
            imgUrl: projImg1,
            githubUrl: "https://github.com/nass31290/keycloak",
        },
        {
            title: "Daily Green",
            description: "Réalisation d'un jeu vidéo 3D dans le cadre du concours Games on Web 2023 de CGI, classé 3ème sur 32 (BabylonJS - Typescript - Blender)",
            imgUrl: projImg2,
            websiteUrl: "https://shannorr.github.io/games-on-web-2023/",
            githubUrl: "https://github.com/gamesonweb/be-green-daily-green/tree/main",
        },
        

        {
            title: "ESMS Numérique",
            description: "Construction d'une méthode de suivi précise incluant les phases d’identification des acteurs, de recueil des besoins, d’évaluation des cas d’usages et de maturité numérique pour faciliter l’usage de nouveaux logiciels par des infirmières. (Gestion de projet - Transformation Digitale - AMOA) ",
            imgUrl: projImg7,
        },
        {
            title: "Réalisation d'un Portfolio responsive",
            description: "Réalisation d'un portfolio pour promouvoir mes réalisations, complètement responsive et dynamique (Javascript - React - Boostrap)",
            imgUrl: projImg8,
            websiteUrl: "https://nass31290.github.io/portfolio-nassim.github.io/",
            githubUrl: "https://github.com/nass31290/portfolio-nassim.github.io",
        },
        {
            title: "Mise en conformité RGPD",
            description: "Mise en conformité à travers une série de formations MOOC, me permettant d'acquérir les connaissances et compétences nécessaires pour comprendre et appliquer les exigences du RGPD (RGPD - Gestion de projet) ",
            imgUrl: projImg5,
            websiteUrl: "https://ambitious-carbon-d9b.notion.site/Formation-MOOC-affdb03709904c039f52955cdf0c2594?pvs=4"
        },
        {
            title: "Mirth Connect",
            description: "Simulation de système hospitalier en utilisant Mirth Connect, un moteur d'intégration interopérable axé sur les soins de santé. L'objectif principal est de créer un environnement virtuel qui reproduit les interactions et les flux de travail entre différentes entités d'un hôpital : Admission, Laboratoire et Facturation (Mirth - TCP/IP - XML - Intéropérabilité)",
            imgUrl: projImg4,
        },
        {
            title: "Vente d'instrumentales",
            description: "Mise en ligne d'un site WordPress contenant des intrumentales que j'ai réalisé afin de pouvoir les vendre",
            imgUrl: projImg6,
            websiteUrl: "https://www.youtube.com/@SanBoiProduction"
        },
        {
            title: "Réalisation d'un Mémoire Professionnel",
            description: "Dans le cadre de ma troisième année de licence MIAGE, j'ai approfondi mes compétences en informatique et en gestion pour adresser les défis spécifiques rencontrés par les établissements de santé dans le contexte de la digitalisation.",
            imgUrl: projImg9,
            websiteUrl: "https://pdf.ac/2tHzzb"
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