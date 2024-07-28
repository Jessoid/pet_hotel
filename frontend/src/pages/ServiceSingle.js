import React from "react";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServiceSingle() {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        const getServiceById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/services/${serviceId}`);
                setService(response.data);
            } catch (error) {
                console.error('Error fetching service details:', error);
            }
        };
        getServiceById();
    }, [serviceId]);

    return (
        <>
            
            <Container fluid className="service_container" style={{padding:0}}>
            
                
                    <div className="custom-image-container" style={{
                            backgroundImage: 'url(/images/page-banner.png)'}}>
                        
                            <div className="overlay-text">
                                <p className="overlay-text-content">{service.title} в Paw Palace</p>
                            </div>
                        
                    </div>
                <div className="main-container">

                    <div style={{marginTop:'60px'}}>
                        <p class="text-title">{service.title}</p>
                        <p><span class="orange-text"><b>Описание: </b></span>{service.description}</p>
                        <p><span class="orange-text"><b>Цена</b></span> - {service.price} EUR / час</p>
                    </div>

                    
                    <div style={{marginTop:'20px', marginBottom:'20px', alignSelf:'center'}}>       
                    <Link to={`/services`}>
                                <p class="btn-style" 
                                style={{
                                    color:'grey',

                                }}>Назад</p>
                            </Link>
                    </div>

                <div style={{marginTop:'60px', marginBottom:'60px'}}>
                        <Row>
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
                        </Row>
                    </div>
                </div>
                
                
            
        </Container>
        </>
    );
}
