import { Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ title, description, imgUrl, link, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{marginTop: "50px"}}>
            <Button
              variant="primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </Button>{" "}
            <Button
              variant="secondary"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> See Source
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
