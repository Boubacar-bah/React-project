import { useState } from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => { 
    
    const [header, setHeader] = useState("WhatsApp");
    
    function changeHead(change) {
        return setHeader(change);
    }

    const Title = () => {    
        return <h1 className="logo" style={{float: "left"}} id="title">{header}</h1>
    }

    return ( <>
    <Title />
    <nav className="bottom">
        <ul>
            <li onClick={() => changeHead('WhatsApp')}>
                <Link to='/'><span className="fa-solid fa-message"> </span><br /> Discussions</Link>
            </li>
            <li onClick={() => changeHead("Actus")}>
                <Link to="/Status"><span className="fa-regular fa-message"></span> <br /> Actus</Link>
            </li>
            <li onClick={() => changeHead('Communautés')}>
                <Link to="/Communaute"><span className="fa-solid fa-user-group"></span><br /> Communautés</Link>
            </li>
            <li onClick={() => changeHead("Appels")}>
                <Link to="/Appels"><span className="fas fa-phone"></span><br /> Appels</Link>
            </li>
        </ul>
    </nav>
    <Outlet /></>
    )
}

export default Layout;