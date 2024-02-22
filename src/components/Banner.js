import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/fontcyber.png";
import {useState, useEffect} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Nassim :)", "Développeur web", "Chef de projet", "DPO", "AMOA"];
    const [text, setText] = useState('');
    
    
    // Vitesse d'écriture constante
    const typingSpeed = 300;
    const [delta, setDelta] = useState(typingSpeed);
    
    // Durée avant de commencer à supprimer le texte
    const deletionDelay = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            // Commencer la suppression après un certain délai
            setTimeout(() => {
                setIsDeleting(true);
                setDelta(100); // Vitesse de suppression plus rapide
            }, deletionDelay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(typingSpeed); // Retour à la vitesse d'écriture normale
        }
    };

    // ...


    return(
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center justify-content-center">
            <Col xs={12} md={6} className="text-md-left text-center">
                <span className="tagline">Bienvenue sur mon Portfolio</span>
                <h1 className="present"> {`Salut ! Je suis.. `}</h1>
                <h1 className="defile"><span className="wrap">{text}</span></h1>
                <p>Actuellement étudiant en Master 2 MIAGE en alternance (50% Informatique / 50% Gestion de projet) à l'Université Paul Sabatier de Toulouse.J'acquiers de la maitrise en développement informatique et en gestion de projets. <br></br> À 23 ans, je m'implique dans des projets axés sur la transformation numérique et sur le développement web au sein de la fondation partenariale I2ML. <br></br> </p><p>Mon objectif principal est de me spécialiser dans la cybersécurité.</p> 
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0 text-center">
                <img src={headerImg} alt="Header Img" className="img-fluid" />
            </Col>
            </Row>
        </Container>
</section>
    )
}