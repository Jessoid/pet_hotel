import React from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Button } from "react-bootstrap";


export default function Logout() {
    const navigate = useNavigate();
    const onClickLogout = () => {
        if (window.confirm('Вы уверены, что хотите выйти?')) {
            window.localStorage.removeItem('token');
            navigate('/');
            window.location.reload();
        }
    };

    return (
        <Container className="px-5 mt-3"  style={{width: '50%', paddingTop:'50px', paddingBottom:'100px'}}>
            <h2>Logout</h2>
            <Button onClick={onClickLogout} variant="danger">Выйти</Button>
        </Container>
    )
}

