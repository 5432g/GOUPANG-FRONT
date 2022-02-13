import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import { Card, ListGroup, Button, Navbar, Container, Nav, NavDropdown, InputGroup
        , DropdownButton, Dropdown, FormControl, Tab, Row, Col, Accordion, Image} from 'react-bootstrap';




function App() {

  
let [list,listChange] = useState();

  return (
    <div className="App">    
      
 <Navbar bg="light" expand="lg">
  <Container>
  
    
 

      <Nav className="me-auto">
        <div className="login">
          {/* <img src="./my.png" /> */}
          <Nav.Link href="#home">로그인</Nav.Link>
          
          </div>
          {/* <Row> */}
       
        {/* </Row> */}
          
        <div className="sign"><Nav.Link href="#link">회원가입</Nav.Link></div>
        <div className="help"><Nav.Link href="#link">고객센터</Nav.Link></div>
    
        <Col xs={6} md={4}>
           <Image src="./my.png" rounded className="ima" />
        </Col>

      </Nav>
     
  </Container>
</Navbar>

<Navbar.Brand href="#home">GOUPANG</Navbar.Brand>
    <>
  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1"  />
  </InputGroup>

  
</>

<div className="depth1">
  <Accordion defaultActiveKey="0" >
   <Card style={{ width: '8rem' }} >
    <Card.Header >
        <Accordion.Toggle as={Button} variant="link" eventKey="0"  className="Toggle">
            식품
        </Accordion.Toggle>
    </Card.Header>    
            <Accordion.Collapse eventKey="0">
              <Card.Body>과일</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="0">
              <Card.Body>채소</Card.Body>
            </Accordion.Collapse>
   </Card>
   <Card style={{ width: '8rem' }}>
    <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="Toggle">
            생활용품
        </Accordion.Toggle>
    </Card.Header>    
            <Accordion.Collapse eventKey="1">
              <Card.Body>헤어</Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>세탁세제</Card.Body>
            </Accordion.Collapse>
   </Card>
  </Accordion> 
</div>
    </div>
  );
}

// function Sidebar(){
//   return(
    
//   )
// }


export default App;
