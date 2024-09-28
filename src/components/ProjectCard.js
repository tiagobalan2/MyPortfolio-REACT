import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, buttongit, buttonHosp, gitUrl, webUrl}) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                {/* Link para o GitHub */}
                {buttongit && (
                    <a 
                        href={gitUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                    >
                        {buttongit}
                    </a>
                )}
                {/* Link para o projeto hospedado */}
                {buttonHosp && (
                    <a 
                        href={webUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-secondary"
                    >
                        {buttonHosp}
                    </a>
                )}
                </div>
            </div>
        </Col>
    )
}