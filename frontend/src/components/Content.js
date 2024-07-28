import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Reviews from '../pages/Reviews';
import ServiceSingle from '../pages/ServiceSingle';
import Gallery from '../pages/Gallery';
import Contacts from '../pages/Contacts';

import Reservation from './Reservation';
import ReservationSuccess from './ReservationSuccess';
import ReservationList from '../actions/ReservationList';

import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Register from './Register';


export default function Content() {
    return (
        <main style={{minHeight:'70vh'}}>
            <Router>
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    
                    <Route exact path="/services" element={<Services />} />
                    <Route path="/servicesingle/:serviceId" element={<ServiceSingle />} />

                    <Route exact path="/gallery" element={<Gallery />} />
                    <Route exact path="/reviews" element={<Reviews />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/reservation" element={<Reservation />} />
                    <Route exact path="/reservationsuccess" element={<ReservationSuccess />} />

                    <Route exact path="/reservationlist" element={<ReservationList />} />                   

                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/logout" element={<Logout />} />

                </Routes>
            </Router>
        </main>
    );
}