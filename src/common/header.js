
import '././header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import logo from '../resources/img/logo_coupang_w350.png';
import myPage from '../resources/img/myPageIcon.png';
import shoppingCart from '../resources/img/shoppingCartIcon.png';
import { Button, Container, Row, Col,Image ,InputGroup, DropdownButton, Dropdown ,FormControl} from 'react-bootstrap';
//import * as ReactBootstrap from 'react-bootstrap/*'


function header() {
  return (
    <div className="Header" fluid>
      <Container className="topNavBar border align-items-center justify-content-center ">
        <Row fluid className="border d-flex align-items-center justify-content-center" >
          <Col className="align-left">
            <div className="headerText"><span>즐겨찾기</span></div>
            <div className="headerText"><span>입점신청</span></div>
          </Col>
          <Col className="align-right">
          <div className="headerText"><span>로그인</span></div>
          <div className="headerText"><span>회원가입</span></div>
          <div className="headerText"><span>고객센터</span></div>
          </Col>
        </Row>
      </Container>
      <Container className="border align-items-center justify-content-center">
        <Row fluid className="headerBar border d-flex align-items-center justify-content-center" >
          <Col xs={1} md={2} className="align-items-center justify-content-center">
            <img className="logo" alt="logo" src="resources/img/logo_coupang_w350.png" />
          </Col>
          <Col xs={5} md={7} className="align-items-center justify-content-center">
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
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          </Col>
          <Col xs={1} md={1} className="align-items-center justify-content-center">
            <Row>
              <img className="mypage" alt="mypage" src="resources/img/myPageIcon.png"/>
            </Row>
            <Row>
              <span className="headerText">마이페이지</span>
            </Row>
          </Col>
          <Col xs={1} md={1} className="align-items-center justify-content-center">
            <Row>
              <img className="cart" alt="cart" src="resources/img/shoppingCartIcon.png" />
            </Row>
            <Row>
            <span className="headerText">장바구니</span>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default header;
