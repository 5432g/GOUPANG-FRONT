import logo from './logo.svg';
import './App.css';
import App_Header from './common/header';
import { Button, Container, Row, Col,Card ,Accordion, DropdownButton, Dropdown ,FormControl} from 'react-bootstrap';

function App() {
  return ( 
      <div className="App">
          <Container className="Container">
            <Row>
              <App_Header/>
            </Row>
            <Row>
              <Col  xs lg="2">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col>
              sdfsfd
            </Col>
          </Row>
        </Container>
    </div>

  );
}

export default App;
