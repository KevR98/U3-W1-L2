import { Container, Row, Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <Row xs={12} className='text-center'>
        <Alert variant='success'>Benvenuto nella libreria EPIBOOK!</Alert>
      </Row>
    </Container>
  );
};

export default Welcome;
