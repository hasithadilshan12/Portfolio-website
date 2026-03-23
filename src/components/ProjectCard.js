import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, figmaUrl, techStack }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          {/* Added Tech Stack Section */}
          {techStack && (
            <div className="tech-stack" style={{ marginTop: '10px', fontSize: '14px', color: '#f8f8f8', fontWeight: '500' }}>
              {techStack.join("  •  ")}
            </div>
          )}
          
          <div style={{ marginTop: '15px' }}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" style={buttonStyle}>
                GitHub
              </a>
            )}
            {figmaUrl && (
              <a href={figmaUrl} target="_blank" rel="noreferrer" style={buttonStyle}>
                Figma
              </a>
            )}
          </div>

        </div>
      </div>
    </Col>
  )
}

const buttonStyle = {
  color: '#fff',
  border: '1px solid #fff',
  padding: '6px 15px',
  borderRadius: '20px',
  margin: '0 5px',
  display: 'inline-block',
  fontSize: '14px',
  textDecoration: 'none',
  fontWeight: '500'
};