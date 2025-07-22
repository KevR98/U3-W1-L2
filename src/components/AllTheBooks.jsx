import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FantasyBooks from '../data/books/fantasy.json';
import HistoryBooks from '../data/books/history.json';
import HorrorBooks from '../data/books/horror.json';
import RomanceBooks from '../data/books/romance.json';
import ScifiBooks from '../data/books/scifi.json';

const AllBooks = [
  ...FantasyBooks,
  ...HistoryBooks,
  ...HorrorBooks,
  ...RomanceBooks,
  ...ScifiBooks,
];

const AllTheBooks = () => {
  return (
    <>
      <Container className='my-5'>
        <Row>
          {AllBooks.map((book) => {
            return (
              <Col xs={12} md={6} lg={4} xl={3} className='g-2' key={book.asin}>
                <Card>
                  <Card.Img variant='top' src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Category: {book.category}</Card.Text>
                    <Card.Text>Price: {book.price}</Card.Text>
                    <Button variant='primary'>ACQUISTA</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
