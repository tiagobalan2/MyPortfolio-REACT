import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo (3).svg';
import navIcon1 from '../assets/img/nav-icon1 (1).svg';
import navIcon2 from '../assets/img/nav-icon2 (1).svg';
import navIcon3 from '../assets/img/nav-icon3 (1).svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home'); // aqui eu coloco a variavel activeLink como home e o setActiveLink para eu mudar o estado do activeLink
  const [scrolled, setScrolled] = useState(false); // aqui coloco scrolled inicialmente como false, para nao scrollar a tela e uso o setScrolled para mudar o estado de scrolled


  // aqui tenho a funcao onScoll, aqui é o seguinte: se eu scrollar a janela por mais de 50px a variavel scrolled é setada para true se nao ela fica falsa
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // aqqui eu tenho uma funcao para setar o estado do activeLink
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 className="h1-navbar">Tiago Balan</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project2" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/tiago-balan-ld15/2" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/tiagobalan2
" target="_blank"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/tiago_balan/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}