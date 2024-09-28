import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo (3).svg";
import icon1 from "../assets/img/nav-icon1 (1).svg"
import icon2 from "../assets/img/nav-icon2 (1).svg"
import icon3 from "../assets/img/nav-icon3 (1).svg"


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <h2 className="h2-footer">Tiago Balan</h2>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#">
                                <img src={icon1} />
                            </a>
                            <a href="#">
                                <img src={icon2} />
                            </a>
                            <a href="#">
                                <img src={icon3} />  
                            </a>
                        </div> 
                        <p>CopyRight 2022. All Rights Reserved</p> 
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}