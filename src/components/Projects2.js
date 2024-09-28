import { Col, Row, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/adhemas3.jpg"
import projImg2 from "../assets/img/teste1 1.jpg"
import projImg3 from "../assets/img/teste2 1.jpg"

export const Projects2 = () => {
    const projects = [
        {
            title: "Login Fullstack",
            description: "FullStack develppment",
            imgUrl: projImg1,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/fullstack-login-cadastro",
          },
          {
            title: "Landing page",
            description: "Frontend development",
            imgUrl: projImg2,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/site-landing-page-responsivo",
          },
          {
            title: "Gerenciamento de estacionamento e carros",
            description: "Backend development",
            imgUrl: projImg3,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/carro-estacionamento-back-end"
          },
          {
            title: "Cadastro de pessoas",
            description: "Fullstack development",
            imgUrl: projImg1,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/trabalhofullstack"
          },
          {
            title: "Consulta CEP",
            description: "Extensão chrome e desenvolvimento web de consulta de CEP",
            imgUrl: projImg2,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/ConsultaCEP"
          },
          {
            title: "API de usuários",
            description: "Fullstack development",
            imgUrl: projImg3,
            buttongit: "Acessar github",
            buttonHosp: "Acessar na web",
            gitUrl: "https://github.com/tiagobalan2/Minha-API"
          },
    
];


    return (
        <section className="project" id="project2">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
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
        </section>
    );
}