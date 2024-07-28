import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default function ReservationDetail() {
    const [reservation, setReservation] = React.useState('');
    const [user, setUser] = React.useState('');
    const [service, setService] = React.useState('');
    const { id } = useParams();
    console.log(id);

    React.useEffect(() => {
        const getReservationById = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/reservations/${id}`);
              console.log(response.data); // Проверьте данные из ответа в консоли
              setReservation(response.data);
              setService(response.data.service);
              setUser(response.data.user);
            } catch (error) {
              console.error('Error fetching reservation:', error);
            }
          };
        getReservationById();
    }, [id]);

    const formatDate = moment(reservation.createdAt).format('LL');

    console.log(reservation);
console.log(service);
console.log(user);

    return (
        <Container className="mt-1">
          {reservation ? (
            <div>
              <h2 className="text-center m-4">Reservation {reservation.ID}</h2>
              <Row className="m-2" key={reservation.id}>
                <Col md="9">
                  <h5>{user ? user.name : 'Unknown User'}</h5>
                  <p>{reservation.inDate}</p>
                  <p>{reservation.outDate}</p>
                  <p>{service ? service.title : 'Unknown Service'}</p>
                  <p>CreatedAt:{formatDate}</p>
                  <p>UpdatedAt:{formatDate}</p>
                  <Link to={`/reservationlist`} className="me-1">
                    Назад
                  </Link>
                </Col>
              </Row>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Container>
      );
}
