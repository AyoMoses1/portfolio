import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/c2c.png";
import shachar from "../assets/img/shachar.png";
import spotfxai from "../assets/img/spotfxai.png";
import timesheet from "../assets/img/timesheet.png";
import hhes from "../assets/img/hhes.png";
import ashefamu from "../assets/img/ashefamu.png";
import client from "../assets/img/rockbliss.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const secondProjects = [
    {
      title: "HHES",
      description:
        "A health care management app that helps agents of health care seeking accreditation in the US",
      imgUrl: hhes,
      link: "https://hhes-cg-platform-fe-v2.vercel.app/",
      // source: "https://github.com/AyoMoses1/Oilcroft",
    },
    {
      title: "MyFXai",
      description:
        "An ai forex trading web application built with React, TypeScript and Chakra UI",
      imgUrl: spotfxai,
      link: "https://spotfxai.web.app/",
      source: "https://github.com/AyoMoses1/myfxai",
    },
    {
      title: "Timesheet",
      description:
        "A project management/clock in tool for employee management. Built with the React, Node and Express",
      imgUrl: timesheet,
      link: "https://timesheet-valon.web.app/",
      source: "https://github.com/AyoMoses1/valon-timesheet",
    },
  ];

  const firstProjects = [
    {
      title: "Ashefamu",
      description:
        "An app that helps streamline the monitoring and accreditation of health facilities in Anambra State, Nigeria",
      imgUrl: ashefamu,
      link: "https://e-ashefamu.anambrastate.gov.ng/",
      source: "https://github.com/AyoMoses1/Ashefamu",
    },
    {
      title: "C2C Marketplace",
      description:
        "An E-commerce platform designed and developed for an agritech company to sell agricultural inputs to farmers",
      imgUrl: projImgOne,
      link: "https://web.c2c.ng/",
      // source: "https://github.com/AyoMoses1/Rockbliss-Admin",
    },
    {
      title: "Rockbliss Client",
      description:
        "A web app designed to help its users review, book, and lodge in a serviced apartment. Built with React and Redux",
      imgUrl: client,
      link: "https://ayo-rockbliss-client.web.app/",
      source: "https://github.com/AyoMoses1/Rockbliss-Client",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Leadership offers an opportunity to make a difference in
                    someone’s life, no matter what the project
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Being a Software Developer is like being an artist,
                          you have the different colored process streams
                          combining into a work of art!!!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="project"
      ></img>
    </section>
  );
};
