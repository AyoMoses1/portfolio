import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImgOne from "../assets/img/1st.png";
import projImgTwo from "../assets/img/2nd.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
    },
    {
      title: "Miss Belleza Nigeria",
      description: "Beauty and Entertainment",
      imgUrl: projImg2,
    },
    {
      title: "Disney Clone",
      description: "Movies and Entertainment",
      imgUrl: projImg4,
    },
  ];

  const firstProjects=[
   {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImgOne,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImgTwo,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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