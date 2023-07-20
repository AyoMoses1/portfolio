import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/first.png";
import timesheet from "../assets/img/timesheet.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import lagent from "../assets/img/la-agent.png";
import bettyx from "../assets/img/bettyx.png";
import spotfx from "../assets/img/spotfx.png"
import client from "../assets/img/rockbliss.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const secondProjects = [
    {
      title: "Rockbliss Admin Panel",
      description: "Hotel Management",
      imgUrl: projImgOne,
      link:"https://rockblissadmin.web.app/",
      source: "https://github.com/AyoMoses1/Rockbliss-Admin"
    },
    {
      title: "Miss Belleza Nigeria",
      description: "Beauty and Entertainment",
      imgUrl: projImg2,
      link:"https://miss-belleza.web.app/",
      source: "https://github.com/AyoMoses1/MissBellezaNigeria"
    },
    {
      title: "Sporty Bettyx",
      description: "Media and Entertainment",
      imgUrl: bettyx,
      link:"https://bettyx-97b54.web.app/",
      source: "https://github.com/AyoMoses1/bettyx"
    },
  ];

  const firstProjects=[
    {
      title: "Valon Timesheet",
      description: "A project Management Tool",
      imgUrl: timesheet,
      link:"https://timesheet-valon.web.app/",
      source: "https://github.com/AyoMoses1/timesheet"
    },
    {
      title: "SpotFX",
      description: "A forex trading website",
      imgUrl: spotfx,
      link:"https://spotfxai.web.app/",
      source: "https://github.com/AyoMoses1/myfxai"
    },
    {
      title: "Rockbliss Client",
      description: "Hotel Management",
      imgUrl: client,
      link:"https://ayo-rockbliss-client.web.app/",
      source: "https://github.com/AyoMoses1/Rockbliss-Client"
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Leadership offers an opportunity to make a difference in someone’s life, no matter what the project</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          firstProjects.map((project, index) => {
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
                           secondProjects.map((project, index) => {
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
                      <p>Being a Software Developer is like being an artist, you have the different colored process streams combining into a work of art!!!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}