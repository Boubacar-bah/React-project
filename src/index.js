import React from 'react';
import ReactDOM from 'react-dom/client';
import "./stylisation.css";

//For navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './parts/Layout'
import Home from './parts/Home';
import Status from './parts/Status';
import Commun from './parts/Communaute';
import Appels from './parts/Appels';
import Header from './parts/Header';
import Fixed from './parts/FixedButton';



const App = () => {
    return (
        <div className='arrange'>
            <Header />
            <Fixed />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='Status' element={<Status />} />
                        <Route path='Communaute' element={<Commun />} />
                        <Route path='Appels' element={<Appels />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const accRoot = ReactDOM.createRoot(document.getElementById('root'));
accRoot.render(<App />)