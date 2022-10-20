import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/first.png";
import projImgTwo from "../assets/img/second.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/third.png";
import projImg4 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const secondProjects = [
    {
      title: "Winax Financial",
      description: "Finance and Loan Management",
      imgUrl: projImg1,
      link:"https://winaxfinancial.web.app/"
    },
    {
      title: "Miss Belleza Nigeria",
      description: "Beauty and Entertainment",
      imgUrl: projImg2,
      link:"https://miss-belleza.web.app/"
    },
    {
      title: "Disney Clone",
      description: "Media and Entertainment",
      imgUrl: projImg4,
      link:"https://disney-clone-20446.web.app/"
    },
  ];

  const firstProjects=[
   {
      title: "Rockbliss Admin Panel",
      description: "Hotel Management",
      imgUrl: projImgOne,
      link:"https://rockblissadmin.web.app/"
    },
    {
      title: "Gemahia",
      description: "Civil Services and Engineering",
      imgUrl: projImgTwo,
      link:"http://gemahia.com/"
    },
    {
      title: "Netflix Clone",
      description: "Media & Entertainment",
      imgUrl: projImg3,
      link:"https://ayo-s-netflix-clone.web.app/"
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