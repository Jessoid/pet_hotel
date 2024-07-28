import React, { useState, useEffect } from 'react';
import axios from '../middleware/axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';


const ReservationForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState({
    userID:'',
    serviceId: '',
    startDate: '',
    endDate: '',
    animalType: '',
    note: '',
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const reservationSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
  
    
    await setReservationData(prevReservationData => ({
      ...prevReservationData,
      userID: decodedToken.userId,
    }));
  
    try {
      const response = await axios.post('http://localhost:5000/reservations', reservationData);
      console.log('Reservation created:', response.data);
      navigate('/reservationsuccess');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <Container fluid className="p-0 reservation-container">
      <div className="text-white" style={{
                backgroundImage: 'url(/images/page-banner4.png)',
                backgroundSize:'cover',
                textAlign: 'center',
                paddingTop: '5rem',
                paddingBottom: '3rem',
                width: '100%',
            }}>
                <h2 style={{fontSize: '32px'}}>БРОНИРОВАНИЕ МЕСТА В ГОСТИННИЦЕ</h2>
                <p style={{fontSize: '16px', marginTop:'30px'}}>Зарегистрируйтесь на нашем сайте и заброниуйте место в гостинице для вашего питомца</p>
            </div>
      
      <Form onSubmit={reservationSubmit}>
        <div>
          <label htmlFor="serviceId">Услуга:</label><br />
          <select
            id="serviceId"
            name="serviceId"
            value={reservationData.serviceId}
            onChange={handleInputChange}
            required
          >
            <option value="">Выберите услугу:</option><br />
            {services.map(service => (
              <option key={service.ID} value={service.ID}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="startDate">Дата начала:</label><br />
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            value={reservationData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="endDate">Дата и время окончания:</label><br />
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            value={reservationData.endDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="animalType">Ваше животное:</label><br />
          <select
            id="animalType"
            name="animalType"
            value={reservationData.animalType}
            onChange={handleInputChange}
            required
          >
            <option value="">Выберите</option>
            <option value="Кошка">Кошка</option>
            <option value="Собака">Собака</option>
          </select>
        </div>

        <div>
          <label htmlFor="note">Пометка:</label><br />
          <textarea
            id="note"
            name="note"
            value={reservationData.note}
            onChange={handleInputChange}
          />
        </div>

        {isLoggedIn ? (
          <Button style={{backgroundColor:'rgba(229, 86, 4, 1)'}} type="submit">Сделать резервацию</Button>
        ) : (
          <p><b>Войдите или зарегистрируйтесь, чтобы сделать регистрацию!</b></p>
        )}
      </Form>
    </Container>
  );
};

export default ReservationForm;
