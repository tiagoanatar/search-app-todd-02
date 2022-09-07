import 'bootstrap/dist/css/bootstrap.min.css';
import menuBar from './assets/bars-solid.svg';
import { useState, useEffect } from 'react';
import { dataFinal } from './data/data';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Search } from './components/Search';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteForm } from './components/QuoteForm';
import { PartsTable } from './components/PartsTable';
import { PartsPagination } from './components/Pagination';

function App() {

  // Data source load
  const [data] = useState(dataFinal)

  // Form search control
  const [search, setSearch] = useState(undefined)

  // Select parts data
  const [parts, setParts] = useState([])

  // Pagination
  const pageMultiplier = 50

  const [pages, setPages] = useState({prev: 0, next: pageMultiplier})

  function changePage(index){
    setPages({prev: index-pageMultiplier, next: index})
  }

  useEffect(() => {
    setPages({prev: 0, next: pageMultiplier})
  },[])

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="mobile-menu hide-mobile" onClick={handleShow}><img alt="Display form" src={menuBar} width="40px" height="40px" /></a>

      <Header />
      <Container>
        <Row>
          <Col>
            <Search search={search} setSearch={setSearch} />
          </Col>
        </Row>
        <Col sm={3} className="show-mobile">
            <QuoteForm 
              parts={parts} 
              setParts={setParts} 
            />
          </Col>
        <Row>
          <Col sm={9}>
            <PartsTable 
              parts={parts} 
              setParts={setParts} 
              data={data} 
              search={search} 
              pages={pages} 
            />
          </Col>
          <Col sm={3} className="hide-mobile">
            <QuoteForm 
              parts={parts} 
              setParts={setParts} 
            />
          </Col>
        </Row>
        <Row className="hide-mobile">
          <Col>
            <PartsPagination 
              search={search} 
              data={data} 
              pageMultiplier={pageMultiplier} 
              changePage={changePage} 
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
