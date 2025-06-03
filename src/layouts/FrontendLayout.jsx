import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const FrontendLayout = () => {
    return (
        <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default FrontendLayout;