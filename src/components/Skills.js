import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/renforcement.png"
import meter2 from "../assets/img/reseau.png"
import meter3 from "../assets/img/organisation.png"
import meter4 from "../assets/img/developpement-web.png"
import meter5 from "../assets/img/la-personne.png"
import colorSharp from "../assets/img/logo.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Compétences
                            </h2>
                            <p> Voici certaines compétences que j'ai pu acquérir durant ma formation univeritaire, mon alternance ou mon temps personnel</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item"> 
                                    <img src={meter1} alt="Image"/>
                                    <h5> Systèmes d'information </h5>
                                    <h8> Gouvernance des SI<br></br>Sécurité des SI <br></br>ERP et CRM<br></br></h8>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="Image"/>
                                    <h5> Réseaux </h5>
                                    <h8>Types de connexions<br></br> Topologie de réseaux<br></br>Protocoles avancés </h8>
                                </div>
                                <div className="item"> 
                                    <img src={meter3} alt="Image"/>
                                    <h5> Gestion de projets </h5>
                                    <h8> Prise en main d'outils de gestion<br></br>Management d'équipes<br></br>Gestion des risques<br></br>Gestion financière</h8>
                                </div>
                                <div className="item"> 
                                    <img src={meter4} alt="Image"/>
                                    <h5> Développement web </h5>
                                    <h8> Développement front-end<br></br>Développement back-end<br></br>Base de données<br></br>Prototypage<br></br></h8>
                                </div>
                                <div className="item"> 
                                    <img src={meter5} alt="Image"/>
                                    <h5> Protection des données </h5>
                                    <h8> Formation de la CNIL<br></br>Établissement de RTD<br></br>Mise en conformité<br></br>Ateliers de sensibilisation</h8>
                                </div>
                                <div className="item"> 
                                    <img src={meter3} alt="Image"/>
                                    <h5> Transformation Numérique </h5>
                                    <h8> Analyse des besoins de changement<br></br>Outils d'évaluation du changement<br></br>Gestion de la confidentialité<br></br>ADKAR, KOTTER..<br></br></h8>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={"colorSharp"} />
        </section>
    )
}