import { Container, Row, Col} from "react-bootstrap";

export const Certifications = () => {

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <h2>Certificações</h2>
                    <ul>
                        <a target="_blank" href="https://www.ireb.org/en/service/cpre-registry-list/16571">
                            <li>CPRE-FL (ABRAMTI)</li>
                        </a>
                        <li>Aluno Tutor Google Ensino Superior</li>
                        <li>CEFR level C1</li>
                        <li>SQL Direto ao ponto</li>
                        <li>Monitor Londrinense Tech</li>
                        <li>Monitor Pensamento Computacional</li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}