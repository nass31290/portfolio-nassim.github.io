import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/social.png';

export const Footer = () => {
  return (
    <footer className="education-timeline" id="footer">
  <h2>Mon Parcours Scolaire</h2>
  <ol>
    <li>
      <h3>Master MIAGE en alternance</h3>
      <p className="timeline-date">2022 - 2024</p>
      <p>Université Paul Sabatier, Toulouse, France</p>
      <p>Cybersécurité, Développement web, Gestion de projet, Bases de données avancées, Système d'Information, Analyse de données, Maths, IA, BabylonJS</p>
    </li>
    <li>
      <h3>Licence MIAGE en alternance</h3>
      <p className="timeline-date">2021</p>
      <p>Université Paul Sabatier, Toulouse, France</p>
      <p>Développement Web, transformation Digitale, Maths, Gestion de projet, Bases de données, AMOA</p>
    </li>
  </ol>
</footer>
  )
}