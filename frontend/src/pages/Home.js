import React from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div class="home-banner" style={{
                        backgroundImage:'url(images/home-banner.png)',
                        height:'438px',
                        backgroundSize:'cover',
                        }}>
                        <p class="banner-text">Cпециально для ваших пушистых друзей:</p>

                        <p class="banner-title">ГОСТИНИЦА ДЛЯ ДОМАШНИХ ЛЮБИМЦЕВ</p>
                        
                        <p class="banner-text" style={{width:'300px'}}>Где уход и ласка создают атмосферу настоящего дома!</p>

                        <Link to={`/reservation`}>
                        <Button class="banner-btn" style={{
                            backgroundColor:'#E55604',
                            fontWeight:'700',
                            padding:'10px 30px 10px 30px',
                            }}>Бронирование</Button>
                        </Link>
            </div>

            <Container  style={{
                maxWidth:"900px"
            }}>
                
                    <div class="home-section" >
                        <row>
                            <div class="col-lg-12 text-title">
                                <p>ГОСТИНИЦА <span class="orange-text">PAW PALACE</span></p>
                            </div>

                            <div class="col-lg-12">
                                <p><span style={{fontWeight:600, color:'#E55604'}}>Наша цель</span> - обеспечить вашему питомцу комфорт и радость, исключив любые проявления стресса и скуки.</p>
                                <p>Мы увлекаем его играми, уютными прогулками и интересными тренировками,чтобы каждое пребывание в нашей гостинице стало для него приятным и запоминающимся опытом, пока вы занимаетесь своими делами.</p>
                            </div>

                            <div class="col-lg-12">
                            <Link to={`/services`}>
                                <Button class="btn-style" 
                                style={{
                                    color:'#E55604',
                                    border:'1px solid #E55604',
                                    backgroundColor:'white',
                                    fontWeight:'700',
                                    padding:'10px 30px 10px 30px',

                                }}>Подробнее</Button>
                            </Link>
                            </div>
                        </row>
                    </div>

            </Container>

            <div class="home-services" style={{
                        backgroundImage:'url(images/servicesbg.png)',
                        backgroundSize:'cover',
                        height:'438px',
                        }}>
                        <Row>
                            <div class="home-services-title">
                                <p>МЫ ПРЕДЛАГАЕМ:</p>
                            </div>
                        </Row>

                        <Row>
                            <Col className="home-service-block">
                                <img alt="service" src="images/serviceIcon.png" style={{width:'100px'}}></img>
                                <p style={{marginTop:'30px'}}>Дневная передержка</p>
                            </Col>

                            <Col className="home-service-block">
                                <img alt="service" src="images/serviceIcon2.png" style={{width:'100px'}}></img>
                                <p style={{marginTop:'30px'}}>Суточная передержка</p>
                            </Col>

                            <Col className="home-service-block">
                                <img alt="service" src="images/serviceIcon3.png" style={{width:'100px'}}></img>
                                <p style={{marginTop:'30px'}}>Спа для питомца</p>
                            </Col>
                           
                        </Row>
            </div>

            <Container style={{
                maxWidth:"900px"
            }}>

                <div class="home-section">
                        <row>
                            <div class="col-lg-8 text-title">
                                <p><span class="orange-text">УСЛОВИЯ ПРИНЯТИЯ</span> ПИТОМЦА НА ПЕРЕДЕРЖКУ В ГОСТИНИЦУ</p>
                            </div>

                            <div class="col-lg-12">
                                <ul class="list">
                                    <li>НЕОБХОДИМО ПРЕДОСТАВИТЬ ДОКАЗАТЕЛЬСТВО О ПРИВИВКАХ  (Медицинские записи с подтверждением сертификата против бешенства, подписанного вашим ветеринаром , прививок против чумы и бордетеллы)</li>
                                    <li>Стерилизованы/кастрированы</li>
                                    <li>Возраст не менее 4 месяцев</li>
                                    <li>БРОНИРОВАНИЕ (за 24 часа до того, как привести питомца в гостиницу)</li>
                                </ul>
                            </div>
                        </row>
                </div>

                <div class="home-accordion">
                    <div class="col-lg-8 text-title" style={{paddingLeft:'100px'}}>
                                <p><span class="orange-text">FAQs</span> ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
                    </div>
                    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Каковы условия проживания моего питомца в вашей гостинице?</Accordion.Header>
        <Accordion.Body>
        В нашей гостинице ваш питомец будет находиться в комфортабельных номерах, обеспеченных кроватями и местами для отдыха. Мы также предоставляем регулярные прогулки и игровое время, чтобы ваш любимец чувствовал себя как дома. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Как часто моего питомца будут выгуливать?</Accordion.Header>
        <Accordion.Body>
        Мы гарантируем регулярные выгулы для всех наших гостей. Собаки выгуливаются несколько раз в день в наших безопасных и ухоженных зонах. Кошки также получают возможность прогулок в специально оборудованных помещениях.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Какие услуги ухода доступны в вашей гостинице?</Accordion.Header>
        <Accordion.Body>
        Наши услуги ухода включают в себя гигиенические процедуры, регулярное кормление согласно вашим указаниям, а также услуги ветеринара по необходимости. Мы также предлагаем дополнительные услуги, такие как груминг и SPA-процедуры. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Могу ли я принести собственные игрушки или постельное белье для моего питомца?</Accordion.Header>
        <Accordion.Body>
        Конечно! Мы всегда приветствуем личные предметы вашего питомца, которые могут сделать его пребывание более комфортным и знакомым. Пожалуйста, убедитесь, что все игрушки и постельное белье должны быть помечены с именем вашего питомца для легкой идентификации.
        </Accordion.Body>
      </Accordion.Item>
                    </Accordion>
                </div>               
            </Container>

            <div class="home-contact-section">
                <Row>
                    <Col style={{
                        paddingTop:'100px'
                    }}>
                    <div class="text-title">
                        <p>НЕ НАШЛИ ОТВЕТ НА СВОЙ ВОПРОС?</p>
                    </div>
                    
                    <div style={{
                        width:'600px'
                    }}>
                        <p>По общим вопросам заполните форму контакта или позвоните нам по телефону. Нам не терпится встретиться с вами и вашим любимцем – мы знаем, что им здесь понравится.</p>
                    </div>

                    <div>
                    <Link to={`/contacts`}>
                                    <Button class="btn-style" 
                                    style={{
                                        color:'#E55604',
                                        border:'1px solid #E55604',
                                        backgroundColor:'rgba(245, 245, 245, 1)',
                                        fontWeight:'700',
                                        padding:'10px 30px 10px 30px',

                                    }}>Свяжитесь с нами</Button>
                    </Link>
                    </div>
                    </Col>

                    <Col>
                    <img class="home-contact-image" alt="homecontact" src="images/home-contact.png"></img>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

