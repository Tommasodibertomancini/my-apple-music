import { Container } from 'react-bootstrap';
import NewsElement from './NewsElement';

const MySection = () => {
  return (
    <>
      <Container className='mt-4'>
        <h2>Novità</h2>

        <hr />
      </Container>

      <Container className='d-flex gap-4 overflow-x-auto'>
        <NewsElement
          description='Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill'
          imgUrl='../../public/assets/images/1a.png'
        />
        <NewsElement
          description='Ecco la nuova casa della musica latina'
          imgUrl='../../public/assets/images/1b.png'
        />
        <NewsElement
          description='La colonna sonora delle tue feste'
          imgUrl='../../public/assets/images/1c.png'
        />
      </Container>
    </>
  );
};

export default MySection;
