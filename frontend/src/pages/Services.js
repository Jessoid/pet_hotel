import React from "react";
import { useState, useEffect } from "react";
import { Container, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Выполнение запроса к бэкенду при монтировании компонента
        axios.get('http://localhost:5000/services')
            .then(response => {
                setServices(response.data); // Обновление состояния данными с бэкенда
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);

    return (
        <Container fluid className="p-0" style={{display:'flex', flexDirection:'column'}}>
            <div className="text-white" style={{
                backgroundImage: 'url(/images/page-banner.png)',
                backgroundSize:'cover',
                textAlign: 'center',
                paddingTop: '5rem',
                paddingBottom: '3rem'
            }}>
                <h2 style={{fontSize: '32px'}}>УСЛУГИ ДЛЯ ПИТОМЦЕВ В PAW PALACE</h2>
                <p style={{fontSize: '16px', marginTop:'30px'}}>Специально для ваших пушистых друзей</p>
            </div>

            <div className="main-container">
                    <div className="mission-header_div">
                        <div className="div_h2"><h2 className="mission-header">НАША МИССИЯ</h2></div>
                        <div>
                            <p className="text">
                                Мы создали гостиницу, где каждый хвостик чувствует себя как дома. Ваши питомцы заслуживают лучшего, и мы заботимся об этом!
                            </p>
                            <p className="text"><span class="orange-text"><b>Наша цель</b></span> - обеспечить вашему питомцу комфорт и радость, исключив любые проявления стресса и скуки. Мы увлекаем его играми, уютными прогулками и интересными тренировками, чтобы каждое пребывание в нашей гостинице стало для него приятным и запоминающимся опытом.</p>
                        </div>
                    </div>

                    <p class="text-title">НАШИ УСЛУГИ:</p>

                <div style={{ width: '100%' }}>
                    <div className="Row">
                        {services.map(service => (
                            <Col key={service.ID}>
                                <Card className="Card">
                                    {service.image && <Card.Img variant="top" src={service.image} alt={service.title} />}
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {service.description}
                                        </Card.Text>
                                        <Link to={`/servicesingle/${service.ID}`}>
                                <Button class="btn-style" 
                                style={{
                                    color:'#E55604',
                                    border:'1px solid #E55604',
                                    backgroundColor:'white',
                                    fontWeight:'700',
                                    padding:'10px 30px 10px 30px',

                                }}>Подробнее</Button>
                            </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </div>
                </div>

                <div className="mission-header_div">
                    <p className="text-title">МЕДИЦИНСКАЯ ЗАБОТА</p>
                    
                        <p className="text">
                            В нашей гостинице ваш питомец находится в полной безопасности. На месте доступен наш профессиональный ветеринар, готовый оказать помощь в случае, если ваш любимец почувствует себя плохо. Все необходимые лечебные процедуры и медикаменты предоставляются абсолютно бесплатно, потому что для нас важно, чтобы ваш питомец получил заботу и внимание, несмотря на любые непредвиденные обстоятельства.
                        </p>
                    

                </div>
                   <div className="mission-header_div">
                       <p class="text-title">УДОБСТВА ДЛЯ СОБАК И КОШЕК</p>
                        
                            <p className="text">
                            В нашей гостинице предусмотрены все удобства для вашего четвероногого друга, будь это собака или кошка. У нас имеется 40 мест для собак и 40 мест для кошек, каждое из которых расположено в отдельном уютном пространстве. Но это еще не все – у нас также есть специальные комнаты для тех случаев, когда у вас есть и кошка, и собака. Мы предлагаем возможность разместить друзей в отдельной комнате, где им будет комфортно вдвоем, чтобы они могли наслаждаться отпуском вместе, не теряя уюта и своего привычного пространства.
                            </p>
                        
                    </div>
            </div>
        </Container>
    );
}