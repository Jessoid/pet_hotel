import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const RegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/users/auth/register`, {
                name:name,
                email:email,
                password:password,
                confPassword:confPassword,
            });
            navigate('/login');
        }catch (error) {
            if (error.response) {
                setMsg('No register');
            }
        }
    };

    return (
        <Container className="px-5 mt-3" style={{width: '50%', paddingTop:'50px', paddingBottom:'100px'}}>
        <h2>Форма регистрации</h2>
        <Form onSubmit={RegisterSubmit}>
            <p className="has-text-centered">{msg}</p>
            <Form.Group className="mb-3 mt-3">
                <Form.Label>Имя:</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder='Ваше имя'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
                <Form.Label>Эл.почта:</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder='Ваша эл.почта'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
                <Form.Label>Пароль:</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder='*******'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
                <Form.Label>Подтвердите пароль:</Form.Label>
                <Form.Control
                    name="confpassword"
                    type="password"
                    placeholder='*******'
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" className="btn btn-primary">
                Регистрация
            </Button>
        </Form>
      
    </Container>
    )
}
