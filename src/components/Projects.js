import { Row, Container, Col, Nav, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/adhemas1.jpg"
import projImg2 from "../assets/img/adhemas2.jpg"
import projImg3 from "../assets/img/adhemas3.jpg"
import colorSharp2 from "../assets/img/color-sharp2 (1).png"


export const Projects = () => {

    const projects = [
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg1,
              },
              {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg2,
              },
              {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg3,
              },
              {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg1,
              },
              {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg2,
              },
              {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: projImg3,
              },
        
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Option 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Option 3
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
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
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}