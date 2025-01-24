import { Container, Row } from 'react-bootstrap';
import MoreOption from './MoreOption';

const MoreSection = () => {
  return (
    <Container>
      <h5>Altro da esplorare</h5>
      <Row className='mt-3'>
        <MoreOption title='Esplora per generi' />
        <MoreOption title='Worldwide' />
        <MoreOption title='Video musicali' />
        <MoreOption title='Decenni' />
        <MoreOption title='Classiche' />
        <MoreOption title='Nuovi artisti' />
        <MoreOption title="Attività e stati d'animo" />
        <MoreOption title='Audio spaziale' />
        <MoreOption title='Hit del passato' />
      </Row>
    </Container>
  );
};

export default MoreSection;
