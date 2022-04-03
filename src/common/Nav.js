import React, { useState } from 'react';
import SideData from '../category.js';
import styled from 'styled-components';

import { Button, Container, Row, Col,Card ,Accordion, DropdownButton, Dropdown ,FormControl, AccordionToggle} from 'react-bootstrap';

let Arrow = styled.span`
margin-left : 30px;
font-size : 12px;
`
let Title = styled.p`
font-size : 11px;
`
let Titleimg = styled.p`
font-family : Tahoma,sans-serif;
color : red;
font-weight : bold;
`
let List = styled.div`
width : 12rem;
margin-right : 15px;
`


function Nav(){

  let [down,downChange] = useState(false);
  let [side,sideChange] = useState(SideData);
  

    return (
        
<Col  xs ="2" style={{paddingLeft : "0px",maxHeight : "100%"}}>
               <Accordion defaultActiveKey="0">
                 <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" 
                    onClick={ ()=> {}} style={{fontSize : "12px"}}>
                     {side[0].title}
                      {/* {
                        down === false
                        ?(
                          <Arrow>&#x2191;</Arrow>
                        )
                        :<Arrow>&#x2193;</Arrow>

                      }  */}
                    </Accordion.Toggle>
                  </Card.Header>
                   <Accordion.Collapse eventKey="0">  
                    <Card.Body style={{fontSize : "12px"}}>{side[0].subtitle1}</Card.Body>
                  </Accordion.Collapse>  
                  <Accordion.Collapse eventKey="0">  
                    <Card.Body style={{fontSize : "12px"}}>{side[0].subtitle2}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="0">  
                    <Card.Body style={{fontSize : "12px"}}>{side[0].subtitle3}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="0">  
                    <Card.Body style={{fontSize : "12px"}}>{side[0].subtitle4}</Card.Body>  
                  </Accordion.Collapse>   
                </Card>
                <Card>
                  <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" 
                    onClick={ ()=> {}} style={{fontSize : "12px"}}>
                     {side[1].title}
                      {/* {
                        down === true && AccordionToggle.id === "1"
                        ?(
                          <Arrow>&#x2191;</Arrow>
                        )
                        :<Arrow>&#x2193;</Arrow>

                      }  */}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle1}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle2}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1"> 
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle3}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle4}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle5}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle6}</Card.Body>  
                  </Accordion.Collapse>   
                  <Accordion.Collapse eventKey="1">  
                    <Card.Body style={{fontSize : "12px"}}>{side[1].subtitle7}</Card.Body>  
                  </Accordion.Collapse>   
                </Card> 
              </Accordion> 
            </Col>
            
    );
}

export default Nav;