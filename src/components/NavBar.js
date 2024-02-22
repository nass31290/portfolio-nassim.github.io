import {useEffect, useState} from "react";
import { Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/logo2.png';
import navIcon1 from '../assets/img/social.png';
import cv from '../assets/img/cv.png';
import monCV from '../assets/files/CV_akonaf_nassim.pdf'

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onNavbarToggle = () => {
        setNavExpanded(!navExpanded);
    }

    return (
        <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${navExpanded ? "nav-expanded" : ""}`}>
            <Container className="nav-container">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onNavbarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Présentation</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
                    <Nav.Link href="#footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footer')}>Parcours</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href={monCV} download="CV_akonaf_nassim.pdf"><img src={cv} alt="" /></a>
                        <a href="https://www.linkedin.com/in/nassim-akonaf-483225211/"><img src={navIcon1} alt="" /></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )

}