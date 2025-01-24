import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MySection from './components/MySection';
import NewSection from './components/NewSection';
import NewReleased from './components/NewReleased';
import MoreSection from './components/MoreSection';
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import SideNav from './components/SideNav';
import MobilePlayer from './components/MobilePlayer';

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Row>
        <Col
          lg={2}
          className='d-none d-lg-block px-0 border-end border-secondary border-opacity-50'
        >
          <SideNav show={show} handleClose={handleClose} />
        </Col>

        <Col xs={12} lg={10} className='px-0'>
          <MyNavbar
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
          <Container className='px-3'>
            <MySection />
            <NewSection />
            <NewReleased />
            <MoreSection />
            <MobilePlayer />
          </Container>

          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default App;
