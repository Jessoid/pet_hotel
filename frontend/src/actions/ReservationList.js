import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from '../middleware/axios';

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        getReservations();
    }, []);


    const getReservations = async () => {
        const response = await axios.get(`http://localhost:5000/reservations`);
        setReservations(response.data);
    };


    const deleteReservation = async (id) => {
        if (window.confirm('Delete record #' + id + '?')) {
            await axios.delete(`http://localhost:5000/reservations/${id}`);
            getReservations();
        }
    };
    
    return (
    <Container className="mt-1">
        <h2 className="text-center mt-3">Управление резервациями</h2>
        <Row>
            <Col md={{span:9, offset:1 }}>
                
                <Table striped>
                    <thead>
                        <tr>
                            <th>No#</th>
                            <th>userID</th>
                            <th>inDate</th>
                            <th>outDate</th>
                            <th>animalType</th>
                            <th>status</th>
                            <th>serviceID</th>
                            <th>note</th>
                            <th>createdAt</th>
                            <th>updatedAt</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reservations.map((reservation, index) => ( 
                            <tr key={reservation.id}>
                                <td>{index + 1}. #{reservation.id}</td>
                                <td>{reservation.userID}</td>
                                <td>{reservation.inDate}</td>
                                <td>{reservation.ouutDate}</td>
                                <td>{reservation.animalType}</td>
                                <td>{reservation.status}</td>
                                <td>{reservation.serviceID}</td>
                                <td>{reservation.note}</td>
                                <td>{reservation.createdAt}</td>
                                <td>{reservation.updatedAt}</td>
                                <td className="text-center">
                                    {/* <Link to={`/reservationdetail/${reservation.ID}`} className="me-1">
                                        <Button variant="success" size="sm">Detail</Button>
                                    </Link> */}

                                    <Link to={`/editreservation/${reservation.id}`} className="me-1">
                                        <Button variant="primary" size="sm">Edit</Button>
                                    </Link>
                                    
                                    <Button onClick={() => deleteReservation(reservation.id)} variant="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
      
    </Container>
  );
}
