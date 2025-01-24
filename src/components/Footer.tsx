import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container as={'footer'}>
      <div>
        <span className='me-2'>
          <span>Italia</span>
        </span>
        <span className='customSpan'> | </span>
        <span>
          <span className='customSpan ms-2'>English (UK)</span>
        </span>
      </div>
      <br />
      <div className='mb-2'>
        <p className='m-0 customSpan'>
          Copyright &copy; 2024 <b>Apple Inc.</b> Tutti i diritti riservati.
        </p>
      </div>

      <div className='mb-2'>
        <a href='javascript:void(0)' className='customSpan me-2'>
          Condizioni dei servizi internet
        </a>{' '}
        <span className='customSpan'> | </span>
        <a href='javascript:void(0)' className='customSpan mx-2'>
          Apple Music e privacy
        </a>
        <span className='customSpan'> | </span>
        <a href='javascript:void(0)' className='customSpan mx-2'>
          Avviso sui cookie
        </a>
        <span className='customSpan'> | </span>
        <a href='javascript:void(0)' className='customSpan mx-2'>
          Supporto
        </a>
        <span className='customSpan'> | </span>
        <a href='javascript:void(0)' className='customSpan mx-2'>
          Feedback
        </a>
      </div>
    </Container>
  );
};

export default Footer;
