import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';

export default class Footer extends Component{
    render() {
        return (
            <footer>
                <Container fluid style={{backgroundColor:'rgba(38, 87, 124, 1)', color:'white', display:'flex', justifyContent:'center', padding:'50px'}}>
                    <row>
                        <div class="col-12" style={{textAlign:'center'}}>
                            <img src="images/logo.svg" alt="logo"></img>
                        </div>
                        <div class="col-12 footer-links">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link href="#features">Услуги</Nav.Link>
                            <Nav.Link href="#pricing">Бронирование</Nav.Link>
                            <Nav.Link href="#pricing">Отзывы</Nav.Link>
                            <Nav.Link href="#pricing">Контакты</Nav.Link>
                        </Nav>
                        </div>

                        <div class="col-12" style={{textAlign:'center'}}>

                            
                        </div>
                    </row>
                </Container>
            </footer>            
        );
    }
}