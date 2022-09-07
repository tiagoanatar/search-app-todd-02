import { Container, Row, Col } from 'react-bootstrap';
import AppLogo from '../assets/uni_logo_02.png'
import FaceIc from '../assets/face-ic.jpg'
import LinkIc from '../assets/linke-ic.jpg'
import Easa from '../assets/EASA-.jpg'

export const Footer = ()=> {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm={2}>
            <a href="#">
              <img  
                src={AppLogo} 
                width='140px' 
                alt='Univseral Motors Logo' 
              />
            </a>
          </Col>
          <Col sm={3}>
            <h6>Address:</h6>
            262 Northside Dawson Dr.<br />
            Dawsonville, GA 30534
          </Col>
          <Col sm={2}>
            <h6>24 Hour:</h6>
            404-886-2523
          </Col>
          <Col sm={2}>
            <h6>Office:</h6>
            678-947-1150
          </Col>
          <Col sm={3}>
            <h6>Email:</h6>
            sales@universalservo.com
          </Col>
        </Row>
      </Container> 
    </div>
    );
  }