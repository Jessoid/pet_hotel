import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

export default function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const photosPerPage = 6;

    useEffect(() => {
        // Выполнение запроса к бэкенду при монтировании компонента
        axios.get('http://localhost:5000/photos')
            .then(response => {
                setPhotos(response.data); // Обновление состояния данными с бэкенда
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    }, []);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
        document.body.style.overflow = ''; 
    };
    
    const pageCount = Math.ceil(photos.length / photosPerPage);

    const displayPhotos = photos
    .slice(pageNumber * photosPerPage, (pageNumber + 1) * photosPerPage)
    .map(photo => (
        <Col key={photo.ID}>
            <img
            src={photo.image}
            alt={photo.description}
            style={{ maxWidth: '280px', margin: '5px', cursor: 'pointer' }}
            onClick={() => openModal(photo)}
            />
        </Col>
    ));

    const handlePageClick = (page) => {
        setPageNumber(page);
    };

    return (
        <Container fluid className="p-0">
            <div className="text-white" style={{
                backgroundImage: 'url(/images/page-banner3.png)',
                backgroundSize:'cover',
                textAlign: 'center',
                paddingTop: '5rem',
                paddingBottom: '3rem',
                width: '100%',
            }}>
                <h2 style={{fontSize: '32px'}}>ГАЛЕРЕЯ</h2>
                <p style={{fontSize: '16px', marginTop:'30px'}}>Домашние питомцы - наши особые гости</p>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto my-2 justify-content-center" style={{ maxWidth: '900px' }}>
                
                {displayPhotos}
            </Row>

            {!isModalOpen && (
                <Pagination className="justify-content-center">
                {Array.from({ length: pageCount }).map((_, index) => (
                    <Pagination.Item
                    key={index}
                    active={index === pageNumber}
                    onClick={() => handlePageClick(index)}
                    >
                    {index + 1}
                    </Pagination.Item>
                ))}
                </Pagination>
            )}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Gallery Modal"
                style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    maxWidth: '800px',
                    margin: 'auto',
                },
                }}
            >
                {selectedPhoto && (
                <div>
                    <img src={selectedPhoto.image} alt={selectedPhoto.description} style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} />
                    <p>{selectedPhoto.description}</p>
                    <p>{new Date(selectedPhoto.createdAt).toLocaleDateString()}</p>
                    <button onClick={closeModal}>Закрыть</button>
                </div>
                )}
            </Modal>
        </Container>
    );
}
