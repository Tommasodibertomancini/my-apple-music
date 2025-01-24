import { Col, Container, Row } from 'react-bootstrap';
import NewElement from './NewElement';
import { ChevronRight } from 'react-bootstrap-icons';

const NewSection = () => {
  return (
    <Container className='mt-4'>
      <h2>
        Nuovi episodi radio <ChevronRight />
      </h2>

      <Row xs={3} lg={5}>
        <Col>
          <NewElement
            imgUrl='../../public/assets/images/2a.png'
            description='Pròlogo con Abuelo'
            isExplicit={true}
          />
        </Col>
        <Col>
          <NewElement
            imgUrl='../../public/assets/images/2b.png'
            description='The Wanderer'
            isExplicit={false}
          />
        </Col>
        <Col>
          <NewElement
            imgUrl='../../public/assets/images/2c.png'
            description='Michael Bublé & Carly Pearce'
            isExplicit={false}
          />
        </Col>
        <Col className=' d-none d-lg-block'>
          <NewElement
            imgUrl='../../public/assets/images/2e.png'
            description='Stephan Moccio: The Zane Lowe Interview'
            isExplicit={false}
          />
        </Col>
        <Col className=' d-none d-lg-block'>
          <NewElement
            imgUrl='../../public/assets/images/2f.png'
            description='Chart Spotlight: Julia Michaels'
            isExplicit={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewSection;
