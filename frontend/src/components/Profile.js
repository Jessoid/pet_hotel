import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
      try{
        const token = window.localStorage.getItem('token');
        const decoded = jwtDecode(token);
        setName(decoded.name);
        setEmail(decoded.email);

        console.log(decoded.name + '!!');
      }catch (error) {
        if (error.response) {
          navigate('/');
        }
      }
    };

    

  return (
    <Container className="container mt-5"  style={{width: '50%', paddingTop:'50px', paddingBottom:'100px'}}>
        <h1><b>{name}</b></h1>
        
        <Table striped bordered hover>
            <thead>
                <tr>                                   
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>                             
                <td>{name}</td>
                <td>{email}</td>
            </tbody>
        </Table>
      
    </Container>
  );
}
