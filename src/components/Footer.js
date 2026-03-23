import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon2 from "../assets/img/nav-icon2.svg"; // GitHub / Facebook
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '100px 0 50px 0', backgroundColor: '#121212' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* Centered Social Links & Copyright */}
          <Col size={12} className="text-center">
            <div className="social-icon">
              {/* Add your actual links here too! */}
              <a href="https://www.linkedin.com/in/hasithadilshan678" target="_blank" rel="noreferrer">
  <img src={navIcon1} alt="LinkedIn" />
</a>
              <a href="https://www.facebook.com/share/1ApTERgVNZ/" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/hasitha_dilshan_hdj?igsh=MTV6cWFma20wN2p1ZQ==" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p style={{ marginTop: '20px', color: '#B8B8B8' }}>
              Copyright 2026. All Rights Reserved.
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}