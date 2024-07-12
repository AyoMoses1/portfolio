import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Resilience isn't a single skill. It's a variety of skills and
                coping mechanisms. ..<br></br> To bounce back from bumps in the
                road as well as failures, you should focus on emphasizing the
                positive.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill1"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill1"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill1"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>RestAPI</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill1"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img
                    src={meter2}
                    alt="skill2"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img
                    src={meter3}
                    alt="skill2"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill2"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>MONGO DB</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill2"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="skill2"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h5>PostgreSQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
