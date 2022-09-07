import { Container, Row, Col } from 'react-bootstrap';
import AppLogo from '../assets/uni_logo_02.png';
import ScriptTag from 'react-script-tag';
import Header01 from '../assets/header-sample-01.jpg';

export const PhoneTracking = ()=> {
  return (
    <ScriptTag isHydrating={true} type="text/javascript" src="//cdn.callrail.com/companies/168163266/93cacf6dd2ac7678bbfb/12/swap.js" />
  )
}

export const Header = ()=> {
  return (
    <>
      <Container style={{borderBottom: '2px solid #ccc'}}>
        <Row className="align-items-center">
          <Col sm={4} className="center-mobile">
            <a href="https://www.universalservo.com/">
              <img  
                src={AppLogo} 
                width='100%' 
                alt='Universal Logo' 
              />
            </a>
          </Col>
          <Col className="right-align hide-mobile">

            <div className='desktop-header-info'>
              <div className="icon-phone-red"><a href="tel:404-886-2523">24 Hour: 404-886-2523</a></div>
              <div className="icon-phone-grey"><a href="tel:678-947-1150">Phone: 678-947-1150</a></div>
              <div className="icon-email">Email: <a href="mailto:sales@universalservo.com">sales@universalservo.com</a></div>
            </div>

            <div className='desktop-menu'>
              <a href="https://www.universalservo.com/our-services/">OUR SERVICES</a>
              
              <a href="https://www.universalservo.com/brands-we-repair/">BRANDS WE REPAIR</a>
              
              <a href="https://www.universalservo.com/about/">ABOUT US</a>
              
              <a href="https://www.universalservo.com/contact/">CONTACT US</a>
              
              <a href="https://www.universalservo.com/ebay-store/">EBAY STORE</a>
            </div>

          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="center-mobile" style={{padding: '25px'}}>
            <h4>Industrial Parts Catalog</h4>
            <p>
            Search our extensive list of robotic, electronic, and hydraulic items below using 
            manufacturer name or part number.  Many of our items feature the average repair 
            price for our services when the unfortunate happens, and a machine goes down.  
            After you select your parts from the list below and submit the form, you will 
            receive an email that you can print and use as a return materials authorization 
            (RMA) to send in with your item for repair.  Looking for a replacement as well?  
            No problem!  Fill out the form, click ‘Get My Quote’ and we will contact you 
            shortly to ensure you are taken care of.  Whatever your needs are, we will get 
            you back up and running in no time.
</p>
          </Col>
        </Row>
      </Container>
    </>
    );
  }