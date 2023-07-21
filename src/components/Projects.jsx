import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/first.png";
import timesheet from "../assets/img/timesheet.png";
import oilcroft from "../assets/img/oilcroft.png";
import bettyx from "../assets/img/bettyx.png";
import tenzies from "../assets/img/tenzies.png";
import client from "../assets/img/rockbliss.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const secondProjects = [
    {
      title: "Rockbliss Admin Panel",
      description:
        "An Admin Panel built for a serviced apartment web app! Manage bookings, payments, and apartments seamlessly with React and Redux",
      imgUrl: projImgOne,
      link: "https://rockblissadmin.web.app/",
      source: "https://github.com/AyoMoses1/Rockbliss-Admin",
    },
    {
      title: "Oilcroft",
      description:
        "This React-based website offers insights into the oil and gas industry, providing easy exploration and access to valuable information.",
      imgUrl: oilcroft,
      link: "https://oilcroft.com/",
      source: "https://github.com/AyoMoses1/Oilcroft",
    },
    {
      title: "Sporty Bettyx",
      description: "Experience the thrill of betting on our dynamic platform! Bet on sports, games, and events with ease and security.",
      imgUrl: bettyx,
      link: "https://bettyx-97b54.web.app/",
      source: "https://github.com/AyoMoses1/bettyx",
    },
  ];

  const firstProjects = [
    {
      title: "Valon Timesheet",
      description:
        " The timesheet app is a productivity tool that optimizes clock-ins, simplifies task assignments, and enhances project management.",
      imgUrl: timesheet,
      link: "https://timesheet-valon.web.app/",
      source: "https://github.com/AyoMoses1/timesheet",
    },
    {
      title: "Tenzies",
      description:
        "Enjoy the excitement of Tenzies! A fun and engaging dice game brought to life with React. Roll the dice and test your luck!",
      imgUrl: tenzies,
      link: "https://ayomoses1.github.io/Tenzies/",
      source: "https://github.com/AyoMoses1/Tenzies",
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
      <img className="background-image-right" src={colorSharp2} alt="project"></img>
    </section>
  );
};
