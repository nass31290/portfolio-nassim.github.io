import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/logo.svg"
import meter2 from "../assets/img/logo.svg"
import meter3 from "../assets/img/logo.svg"
import meter4 from "../assets/img/logo.svg"
import meter5 from "../assets/img/logo.svg"
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
                            <p> Certaines compétences que j'ai pu acquérir durant ma formation univeritaire, mon alternance ou mon temps personnel</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item"> 
                                    <img src={meter1} alt="Image"/>
                                    <h5> Front-end </h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="Image"/>
                                    <h5> Back-end </h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter3} alt="Image"/>
                                    <h5> Base de données </h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter4} alt="Image"/>
                                    <h5> UX-UI </h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter5} alt="Image"/>
                                    <h5> Management </h5>
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