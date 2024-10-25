import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <Container fluid className="main-container">
      <Row className="thin-line"></Row>
      <Row className="thin-line"></Row>
      <Row className="footer">
        <Col>
          <h1 className="footer-text">@NomeXXX todos os direitos reservados</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
