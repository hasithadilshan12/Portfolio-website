import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// IMPORTANT: Replace these with screenshots of your actual projects later!
import projImg1 from "../assets/img/UniNav App.png";
import projImg2 from "../assets/img/Campus Matrix.png";
import projImg3 from "../assets/img/VotexNew.png";
import projImg4 from "../assets/img/MoodMeal App.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Category 1: Your completed Java App
  const completedProjects = [
    {
      title: "UniNav Mobile App",
      description: "Fully developed mobile application",
      imgUrl: projImg1, 
      githubUrl: "https://github.com/hasithadilshan12/UNINAV.git", 
      figmaUrl: "https://www.figma.com/proto/mjXCPsrc4CFgMDcKkqBJII/UniNav_App?node-id=2019-156&t=ZonctjDrMtnrcqZR-1&scaling=scale-down&content-scaling=fixed&page-id=2001%3A171&starting-point-node-id=2019%3A156", 
      techStack: ["Java", "Android Studio", "Firebase"] // <-- ADD YOUR TECH HERE
    },
    {
      title: "Mood Meal App",
      description: "UI Design",
      imgUrl: projImg4, 
      githubUrl: "https://github.com/YOUR_USERNAME/YOUR_REPO",
      figmaUrl: "https://www.figma.com/proto/fqmPjzwSQmbLjMxd6cRCwA/UX-design-Group-project?page-id=0%3A1&node-id=14-8&viewport=1440%2C717%2C0.4&t=lnvvraRy4RLMrw9O-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A8",
      techStack: ["Figma"] // <-- ADD YOUR TECH HERE
    }
  ];

  // Category 2: Your UI/UX and Ongoing work
  const ongoingProjects = [
    {
      title: "CampusMatrix Website Project",
      description: "UI Built - Currently in Development",
      imgUrl: projImg2, 
      githubUrl: "https://github.com/CampusMatrix-Org/CampusMatrix-project.git",
      figmaUrl: "https://www.figma.com/proto/A5DapMRp0HQt3XrhvqBGLJ/CM-UIs?page-id=0%3A1&node-id=524-23&p=f&viewport=16797%2C2588%2C0.4&t=7tgx7wOnlEzDjQEt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=524%3A23",
      techStack: ["React", "Tailwind CSS","MongoDB","Express Js","Node Js"] // <-- ADD YOUR TECH HERE
    },
    {
      title: "Votex Website Project",
      description: "UI Built - Currently in Development",
      imgUrl: projImg3, 
      githubUrl: "https://github.com/Voteapp-Project/voting-mobile-app.git",
      figmaUrl: "https://www.figma.com/proto/Tr3mp0Ha2y6UoLGx4hyL1b/voting-app?page-id=0%3A1&node-id=8-14&viewport=3201%2C1612%2C0.96&t=MfOfIQTbbCWwbK3i-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A4",
      techStack: ["Figma", "Java", "MySQL","React","React Native"] // <-- ADD YOUR TECH HERE
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A showcase of my completed software engineering projects and ongoing UI/UX development work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">In Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* First Tab: Completed Projects */}
<Tab.Pane eventKey="first">
  {/* Add className="justify-content-center" right here */}
  <Row className="justify-content-center">
    {completedProjects.map((project, index) => {
        return (
          <ProjectCard key={index} {...project} />
        )
      })}
  </Row>
</Tab.Pane>

{/* Second Tab: Ongoing Projects */}
<Tab.Pane eventKey="second">
  {/* Add className="justify-content-center" right here too */}
  <Row className="justify-content-center">
    {ongoingProjects.map((project, index) => {
        return (
          <ProjectCard key={index} {...project} />
        )
      })}
  </Row>
</Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background glow"></img>
    </section>
  )
}