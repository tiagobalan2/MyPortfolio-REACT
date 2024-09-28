import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img (1).svg"
import {useState, useEffect } from "react";
import mypic from "../assets/img/adhemas4.jpg"


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0); // vai controlar qual palavra da lista toRotate vai ser exibida
    const [isDeleting, setIsDeleting] = useState(false); // estado que vai controlar se o texto esta sendo apagadou ou escrito na animação
    const toRotateList = [" FullStack Developer", " Software Engineering Student"];
    const [text, setText] = useState(''); // o texto que esta sendo exibido atualmente no banner
    const [timeToChange, setTImeToChange] = useState(50); // um intervalo de tempo entre as mudanças de texto
    const period = 2000; // tempo maior para uma pausa maior ao final de cada palavra. 2000 milisegundos = 2 segundos
    
    // define um intervalo (setInterval), que chama a funcao ticker a cada timeToChange segundos
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, timeToChange
    )
    return () => { clearInterval(ticker)};
    }, [text])

    // funcao tick

    const tick = () => {
        let i = loopNum % toRotateList.length;
        let fullText = toRotateList[i];         // apaga um caractere               // adiciona um caractere
        let updatedText  = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 

        setText(updatedText); 

        if (isDeleting) {
            setTImeToChange(50); 
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTImeToChange(period);
        } else if (isDeleting && updatedText === '') { 
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setTImeToChange(50);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi i am Tiago, `}<span className="wrap">{text}</span></h1>
                    <p>Estudante de Engenharia de Software - atualmente trabalhando em uma martech (BW8)</p>
                    <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>


                    </Col>  
                </Row>
            </Container>

        </section>
    )

    //trocar a headerImg por imagem minha ou qualquer outra coisa

    

}