import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/ayo-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/twitter.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ayomoses/" target="_blank"  rel="noopener noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://twitter.com/AyoMose71556683" target="_blank"  rel="noopener noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/AyoMoses1" target="_blank"  rel="noopener noreferrer">
                <img src={navIcon3} alt="" className="git" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
