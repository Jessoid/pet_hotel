import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
  
    const Auth = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:5000/users/auth/login', {
          email:email,
          password:password,
        });
        console.log(response.data.token);
  
        window.localStorage.setItem('token', response.data.token);
        navigate('/profile');
        window.location.reload();
      }catch(error){
        if (error.response){
          setMsg('Email or password wrong');
        }
      }
    };
      return (
      <Container className="px-5 mt-3" style={{width: '50%', paddingTop:'50px', paddingBottom:'100px'}}>
        <h2> Выполните вход </h2>
        <Form onSubmit={Auth}>
          <p className="has-text-centered"> {msg}</p>
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Эл.адрес:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              />          
          </Form.Group>
  
          <Form.Group className="mb-3 mt-3">
            <Form.Label>Пароль:</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              />          
          </Form.Group>
  
          <Button type="submit" className="btn btn-primary">
            Войти
          </Button>
        </Form>
      </Container>
    )
  }