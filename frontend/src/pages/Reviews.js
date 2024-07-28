import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Form, Button, Pagination } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);
  const [reviewData, setReviewData] = useState({
    serviceId: '',
    text: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(1);
  const reviewsPerPage = 3;

  useEffect(() => {
    axios.get('http://localhost:5000/reviews')
      .then(response => {
        setReviews(response.data.reverse());
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });

    axios.get('http://localhost:5000/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });

    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prevReviewData => ({
      ...prevReviewData,
      [name]: value,
    }));
  };

  const submitReview = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    try {
      const response = await axios.post('http://localhost:5000/reviews', {
        ...reviewData,
        userID: decodedToken.userId,
      });

      console.log('Review created:', response.data);

      // Обновление списка отзывов
      setReviews(prevReviews => [response.data, ...prevReviews]);

      // Очистка формы
      setReviewData({
        serviceId: '',
        text: '',
      });

      // Перезагрузка страницы
      window.location.reload();
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  // Рассчитываем индексы для текущей страницы
  const startIndex = (activePage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  // Обработчик смены страницы
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'rgba(255, 255, 255, 1)', display: 'flex', flexDirection: 'column' }}>
      <div className="text-white" style={{
        backgroundImage: 'url(/images/page-banner2.png)',
        backgroundSize: 'cover',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        width: '100%',
      }}>
        <h2>ОТЗЫВЫ - PAW PALACE</h2>
        <p style={{ fontSize: '16px', marginTop: '30px' }}>Ваши слова важны для нас</p>
      </div>
      <Row xs={1} md={1} lg={1} className="g-4" style={{ backgroundColor: 'rgba(255, 255, 255, 1)', margin: '0px' }}>
        {currentReviews.map(review => (
          <div key={review.ID}>
            <Col
              xs={12}
              md={6}
              lg={6}
              className="text-black mx-auto my-2"
              style={{ padding: '20px', boxShadow: '0px 4px 80px 0px #C7C7C740', borderRadius: '20px' }}
            >
              <div className="d-flex justify-content-between">
                <p>
                  <span style={{ color: 'rgb(229, 86, 4)', fontWeight: 'bold' }}>
                    Пользователь:
                  </span> {review.user ? review.user.name : 'Анонимный пользователь'}
                </p>
                <p>{review.createdAt}</p>
              </div>
              <p>
                <span style={{ color: 'rgb(229, 86, 4)', fontWeight: 'bold' }}>
                  Услуга:
                </span> {review.service ? review.service.title : 'Без названия услуги'}
              </p>
              <p>{review.text}</p>
            </Col>
          </div>
        ))}
      </Row>

      <Pagination className="justify-content-center">
        {[...Array(Math.ceil(reviews.length / reviewsPerPage)).keys()].map(number => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === activePage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <div className="createReviewBlock" style={{ width: '700px', alignSelf: 'center' }}>
        <Row>
          {/* Добавление формы для отзыва */}
          <Col xs={12} className="text-black mx-auto my-2" >
            <p className="text-title">Добавить отзыв</p>
            <Form onSubmit={submitReview}>
              <div>
                <label htmlFor="serviceId">Услуга:</label><br />
                <select
                  id="serviceId"
                  name="serviceId"
                  value={reviewData.serviceId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Выберите услугу:</option>
                  {services.map(service => (
                    <option key={service.ID} value={service.ID}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="text">Текст:</label><br />
                <textarea
                  id="text"
                  name="text"
                  value={reviewData.text}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {isLoggedIn ? (
                <Button type="submit">Добавить отзыв</Button>
              ) : (
                <p><b>Войдите или зарегистрируйтесь, чтобы написать отзыв!</b></p>
              )}
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
