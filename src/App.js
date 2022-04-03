import logo from './logo.svg';
import './App.css';
import App_Header from './common/header';
import App_Nav from './common/Nav';
import { Button, Container, Row, Col,Card ,Accordion, DropdownButton, Dropdown ,FormControl, AccordionToggle, Nav} from 'react-bootstrap';
import SampleData from './product/Data.js';
import { useState } from 'react';
import SideData from './category.js';
import styled from 'styled-components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './product/Detail.js';

let Arrow = styled.span`
margin-left : 30px;
font-size : 12px;
`
let Title = styled.p`
font-size : 11px;
padding-left : 35px;
`
let Titleimg = styled.p`
font-family : Tahoma,sans-serif;
color : red;
font-weight : bold;
padding-left : 35px;
`
let List = styled.div`
width : 12rem;
margin-right : 15px;
`

function App() {

  return ( 
      <div className="App">
          <Container className="Container">
            <Row>
              <App_Header/>
            </Row>
            <Row>
              <App_Nav />
          
          <tr>
        
            <td >
              {/* <Nav.Link  to="/Detail" as={Link} onClick={ ()=>{alert("상세페이지이동TEST")} }> */}
            <Route path="/product/Detail/:id">
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              {/* </Nav.Link> */}
            </Route> 
            </td>
        
        

            <td>
            <Nav.Link  to="/Detail">
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
            </Nav.Link>
            </td>

            <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
            </td>

            <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
               </List>
               </div>
            </td>
          
          
            <tr></tr>  
          
          <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
          </td>
          
          <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
          </td>
          <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
          </td>
          <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
          </td>
          <tr></tr>
          <td>
              <div>
              <List>
                <img src="/resources/img/airPod.png" />
                <Title>Apple 2021 에어팟 프로 블루투스 이어폰 맥세이프 호환, MLWK3KH/A</Title>
                <Titleimg>20,240원 <img src="//image6.coupangcdn.com/image/cmg/icon/ios/logo_rocket_large@3x.png" height="16"
                 alt="로켓배송"></img></Titleimg>
              </List>
              </div>
          </td>
              </tr>            
            
          
            </Row>
          

        </Container>
        

         
       
  
    </div>

  );
}

 



export default App;


