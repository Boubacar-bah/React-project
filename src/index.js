import React from 'react';
import ReactDOM from 'react-dom/client';

//For navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './parts/Layout'
import Home from './parts/Home';
import Status from './parts/Status';
import Commun from './parts/Communaute';
import Appels from './parts/Appels';
import Header from './parts/Header';
import Fixed from './parts/FixedButton';

/*import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from './pages/Blogs';
import Formulaire from './pages/Formulaire';
import Lists from './pages/Lists';
import Car from "./pages/Application";


function Auto(props) {
    return <li>Je suis une { props.mark }</li>
}
function Garage() {
    const cars = [
        {id: 1, mark: 'Mercedes'},
        {id: 2, mark: 'Toyota'},
        {id: 3, mark: 'Volvo'}
    ]
    return (
        <>
            <h1>Voitures ! Présentez-vous !</h1>
            <ul>
                {cars.map((car) => <Auto key={car.id} mark={car.mark} />)}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Garage />);



export default function App() {
    return ( <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='blogs' element={<Blogs />} />
                    <Route path='formulaire' element={<Formulaire />} />
                    <Route path='*' element={<Lists />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

const roote = ReactDOM.createRoot(document.getElementById('root1'));
roote.render( <App />)
const root2 = ReactDOM.createRoot(document.getElementById("root3"));
root2.render(<Car />)
*/



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

const accRoot = ReactDOM.createRoot(document.getElementById('root4'));
accRoot.render(<App />)