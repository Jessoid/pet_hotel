import React, { Component, useState, useEffect } from 'react';
import {Container, Navbar, Nav } from 'react-bootstrap';
import Content from './Content.js';
import axios from 'axios';

import { jwtDecode } from 'jwt-decode';

export default function Header() {
    const [state, setState] = useState(false);
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        getMe();

        const token = localStorage.getItem('token');
        if (token) {
            setState(true);
            fetchUserData(token);
        }else {
            setState(false);
        }
    }, []);

    const getMe = async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            const decoded = jwtDecode(token);
            setName(decoded.name);
            setRole(decoded.role);
            setState(true);
          }else {
            setState(false);
          }
        }catch (error) {
          if (error.response) {

          }
        }
      };

      const fetchUserData = async (token) => {
        try {
          const response = await axios.get('http://localhost:5000/users/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
        return(
            <>
            <header>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                    <Navbar.Brand href="#home"><img src="images/logo.svg" alt="logo"></img></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/services">Услуги</Nav.Link>
                        <Nav.Link href="/reservation">Бронирование</Nav.Link>
                        <Nav.Link href="/reviews">Отзывы</Nav.Link>
                        <Nav.Link href="/gallery">Галерея</Nav.Link>
                        <Nav.Link href="/contacts">Контакты</Nav.Link>
                    </Nav>

                    
                    <Nav className="me-auto">
                    {state && role === 'admin' ? (
                        <>
                        
                        <Nav.Link href="/reservationlist">Уп.Резервации</Nav.Link>
                        
                        </>
                    ) : (
                        <></>
                    )}
                    </Nav>

                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {state ? (
                        <>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                        </>
                        ) : (
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        </>
                        )}
                    </Nav>
                    </Container>
                </Navbar>          
            </header>
            <Content />
            </>
        )
    
}