import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

import { Track } from '../types/Track';
import NewSong from './NewSong';

const NewReleased = () => {
  const [songs, setSongs] = useState<Track[]>([]);

  const URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=';

  const getSongs = async () => {
    try {
      const response = await fetch(URL + 'eminem');
      if (response.ok) {
        const data = await response.json();
        setSongs(data.data); 
      } else {
        throw new Error('Errore nel recupero dati!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <Container className='mt-4'>
      <h4>
        Nuove uscite <ChevronRight />
      </h4>

      <Row xs={3} lg={5}>
        {songs.slice(0, 10).map((song) => (
          <Col key={song.id} className='mb-3'>
            <NewSong track={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewReleased;
